import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { IndexRouteObject } from "react-router-dom";

export type CustomRoutes = Omit<IndexRouteObject, "children" | "index">;
export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  required?: boolean;
}
