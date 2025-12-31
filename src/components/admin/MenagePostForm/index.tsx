"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useActionState, useEffect, useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { InputCheckbox } from "@/components/InputCheckbox";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";
import { toast } from "react-toastify";
import { updatePostAction } from "@/actions/post/update-post-actio";

type ManagePostFormUpdateProps = {
  mode: "update";
  publicPost: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: "create";
};

type ManagePostFormProps =
  | ManagePostFormUpdateProps
  | ManagePostFormCreateProps;

export function MenagePostForm(props: ManagePostFormProps) {
  const { mode } = props;

  let publicPost;

  if (mode === "update") {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState,
  );
  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();

      state.errors.forEach((error) => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.dismiss();

      toast.success("Post atualizado com sucesso!");
    }
  }, [state.success]);

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <Input
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={formState.id}
          readOnly
        />

        <Input
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={formState.slug}
          readOnly
        />

        <Input
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={formState.author}
          disabled={isPending}
        />

        <Input
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={formState.title}
          disabled={isPending}
        />

        <Input
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <Input
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className="mt-4">
          <Button
            size="md"
            variant="default"
            type="submit"
            disabled={isPending}
          >
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
