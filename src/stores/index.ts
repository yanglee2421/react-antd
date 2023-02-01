import React from "react";

export const CtxAuth = React.createContext(initAuth());
export function initAuth() {
  const state = {
    user: "",
    token: "",
    expiration: 0,
  };
  return {
    state,
    isLogined() {
      return false;
    },
    signIn(param: typeof state, isRemember = false) {},
    signOut() {},
  };
}
