import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const lerp = (a: number, b: number, n: number) => {
    return a * (1 - n) + b * n;
};
