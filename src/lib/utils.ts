import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (
  ...inputs: Array<
    | string
    | number
    | boolean
    | undefined
    | null
    | Record<string, boolean>
    | Array<string | number | boolean | undefined | null | Record<string, boolean>>
  >
) => {
  return twMerge(clsx(inputs));
};
