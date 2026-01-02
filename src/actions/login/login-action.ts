"use server";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!(formData instanceof FormData)) {
    return {
      username: "",
      error: "Dados inválidos",
    };
  }
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = ``;

  return {
    username: "",
    error: "",
  };
}
