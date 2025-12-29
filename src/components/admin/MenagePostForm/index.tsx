"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { InputCheckbox } from "@/components/InputCheckbox";

export function MenagePostForm() {
  const [contentValue, setContentValue] = useState("");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <Input
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <Input
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <Input
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={""}
        />

        <Input
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={""}
        />

        <Input
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <Input
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={""}
        />

        <InputCheckbox labelText="Publicar?" name="published" type="checkbox" />

        <div className="mt-4">
          <Button size="md" variant="default" type="submit">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
