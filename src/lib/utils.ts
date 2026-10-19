import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names using clsx + tailwind-merge.
 * This is the standard shadcn/ui utility used across the component library.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
