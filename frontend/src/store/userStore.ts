import { create } from "zustand";
type Token = {
  access: string;
  refresh: string;
};

type UserStore = {
  token: Token | null;
  setToken: (token: Token) => void;
  clearToken: () => void;
};

export const useUser = create<UserStore>((set) => {
  return {
    token: null,
    setToken: (token) => {
      set({ token });
    },
    clearToken: () => {
      set({ token: null });
    },
  };
});
