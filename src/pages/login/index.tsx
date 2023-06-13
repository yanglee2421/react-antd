import { ItemEmail, ItemPassword, ItemIsRemember } from "./form-items";
import { sliceLogin, useAppDispatch } from "@/redux";

// Form Imports
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Hooks Imports
import { CtxForm } from "./hooks";

export enum Fields {
  email = "email",
  pwd = "password",
  isChk = "isRemember",
}

export interface FormValues {
  [Fields.email]: string;
  [Fields.pwd]: string;
  [Fields.isChk]: boolean;
}

export function Component() {
  const dispatch = useAppDispatch();

  const schema = getSchema();
  const formReturn = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      [Fields.email]: "",
      [Fields.pwd]: "",
      [Fields.isChk]: false,
    },
  });

  // Submit & reset
  const handleReset = () => formReturn.reset();
  const handleSubmit = formReturn.handleSubmit((data: unknown) => {
    console.log(data);
    dispatch(sliceLogin.actions.actSetState(true));
  });

  return (
    <div className="h-100">
      <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <CtxForm.Provider value={{ ...formReturn }}>
          <ItemEmail field={Fields.email}></ItemEmail>
          <ItemPassword field={Fields.pwd}></ItemPassword>
          <ItemIsRemember field={Fields.isChk}></ItemIsRemember>
        </CtxForm.Provider>
        <div>
          <button type="submit">login</button>
          <button type="reset">reset</button>
        </div>
      </form>
    </div>
  );
}

// Validate fields rules
function getSchema() {
  return yup.object().shape({
    email: yup
      .string()
      .required()
      .email()
      .max(30)
      .test((v, { createError }) => {
        if (v === "yanglee2421@gmail.com") return true;
        return createError({ message: "Email不正确" });
      }),
    password: yup
      .string()
      .required()
      .max(16)
      .test((v, { createError }) => {
        if (v === "admin") return true;
        return createError({ message: "密码不正确" });
      }),
    isRemember: yup.boolean().test((v, { createError }) => {
      if (v) return true;
      return createError({ message: "不记住你登nm" });
    }),
  });
}
