import { hashPassword } from "@/lib/login/manage-login";

(async () => {
  const minhaSenha = ""; // do not forgot to delete the pass

  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();
