"use client";

import { loginAction } from "@/actions/login/login-action";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export function LoginForm() {
  const initialState = {
    email: "",

    errors: [],
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  const userChanged = searchParams.get("userChanged");
  const created = searchParams.get("created");

  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();

      state.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [state]);

  useEffect(() => {
    if (userChanged === "1") {
      toast.dismiss();
      toast.success("Seu usuário foi modificado. Faça login novamente.");
      const url = new URL(window.location.href);
      url.searchParams.delete("userChanged");
      router.replace(url.toString());
    }

    if (created === "1") {
      toast.dismiss();
      toast.success("Seu usuário criado.");
      const url = new URL(window.location.href);
      url.searchParams.delete("created");
      router.replace(url.toString());
    }
  }, [userChanged, created, router]);

  return (
    <div className="flex items-center justify-center text-center max-w-sm mt-16 mb-32 mx-auto">
      <form action={action} className="flex-1 flex flex-col gap-6">
        <Input
          type="email"
          name="email"
          labelText="E-mail"
          placeholder="Seu e-mail"
          disabled={isPending}
          defaultValue={state.email}
          required
        />

        <Input
          type="password"
          name="password"
          labelText="Senha"
          placeholder="Sua senha"
          disabled={isPending}
          required
        />

        <Button
          size="md"
          variant="default"
          disabled={isPending}
          type="submit"
          className="mt-4"
        >
          <LogInIcon />
          Entrar
        </Button>
        <p className="text-sm/tight">
          <Link href="/login">Não tem conta? Criar</Link>
        </p>
      </form>
    </div>
  );
}
