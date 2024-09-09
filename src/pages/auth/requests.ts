import request from "@/utils/axios";

export const fetchLogin = (data: FormData) => {
  return request({ url: "/users/login", method: "POST", data });
};
