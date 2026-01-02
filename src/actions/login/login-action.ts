"use server";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    username: "",
    error: "Teste de erro",
  };
}
