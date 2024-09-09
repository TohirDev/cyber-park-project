import { PropsWithChildren } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface IFormWrapperProps<T extends FieldValues>
  extends PropsWithChildren {
  onSubmit: (data: T) => void;
  methods: UseFormReturn<T>;
}

export const FormWrapper = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
}: IFormWrapperProps<T>) => {
  return (
    <form
      onSubmit={
        methods !== null ? methods.handleSubmit(onSubmit) : undefined
      }
      noValidate
      autoComplete="off"
    >
      {children}
    </form>
  );
};
