import { useReducer } from "react";

namespace t {
  type act<T> = (param: T) => void;
  export type reducer<T> = (pa: T, act: act<T>) => T;
}

export function useObject<T>(init: T) {
  const type = toStringTag(init);
  const allowTypes = ["object", "array"];
  const isAllowType = allowTypes.includes(type);
  if (!isAllowType) new Error("initialState can only be object or array");

  return useReducer<t.reducer<T>, T>(
    (state, act) => {
      try {
        const target = structuredClone(state);
        act(target);
        return target;
      } catch {
        throw new Error("useObject can`t handle this type");
      }
    },
    init,
    (init) => init
  );
}

function toStringTag(target: unknown) {
  return Object.prototype.toString
    .call(target)
    .replace(/\[object (\w+)\]/, "$1")
    .toLocaleLowerCase();
}