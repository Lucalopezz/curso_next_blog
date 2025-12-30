import { ZodFormattedError } from "zod";

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
  return Object.values(error)
    .flatMap((field) => {
      if (!field || typeof field !== "object") return [];

      if ("_errors" in field && Array.isArray(field._errors)) {
        return field._errors;
      }

      return [];
    })
    .filter(Boolean);
}
