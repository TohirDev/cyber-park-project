import { selectSetUser, useUserStore } from "@/stores/userStore";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../requests";

export const useLogin = () => {
  const setUser = useUserStore(selectSetUser);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: { username: "emilys", password: "emilyspass" },
  });
  const onSubmit = useCallback(
    async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        const login = await fetchLogin(formData);
        if (login.status === 200) {
          setUser({ ...login.data, token: login.data.token });
        }
      } catch {
        console.log("errrrror");
      } finally {
        setLoading(false);
      }
    },
    []
  );
  return { form, onSubmit, loading };
};
