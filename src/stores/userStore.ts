import { User } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TUser = User & { token: string };

interface State {
  user: TUser | null;
}

interface Actions {
  setUser: (data: TUser) => void;
  removeUser: VoidFunction;
}

export const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    { name: "USER_STORE" }
  )
);

export const selectUser = (state: State) => state.user;
export const selectSetUser = (state: Actions) => state.setUser;
export const selectRemoveUser = (state: Actions) => state.removeUser;
export const getToken = () => useUserStore.getState().user?.token;
