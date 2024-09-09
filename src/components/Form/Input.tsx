import { IFormControl } from "@/types";
import { Controller, FieldValues } from "react-hook-form";
import { Input } from "../ui/input";

type IFormInputProps<T extends FieldValues> = IFormControl<T>;

export const FormInput = <T extends FieldValues>({
  control,
  name,
  required,
  ...props
}: IFormInputProps<T>) => {
  return (
    <Controller
      {...{
        name,
        control,
      }}
      render={({ field }) => (
        <Input
          {...props}
          {...field}
          onChange={(e) => {
            field.onChange(e);
          }}
          value={field.value ?? ""}
          required={required}
        />
      )}
    ></Controller>
  );
};
