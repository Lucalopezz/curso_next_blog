import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email({ error: "E-mail inválido" }).trim(),
  password: z
    .string({ error: "Senha inválida" })
    .trim()
    .min(6, { error: "Senha deve ter no mínimo 6 caracteres" }),
});
