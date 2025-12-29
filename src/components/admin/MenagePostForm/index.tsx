"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function MenagePostForm() {
  const [contentValue, setContentValue] = useState("");
  return (
    <form className="mb-16">
      <div className="flex flex-col gap-6">
        <Input labelText="Nome" placeholder="Digite seu nome" type="password" />

        <Input labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <ImageUploader />

        <Input
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <div className="mt-4">
          <Button size="md" variant="default" type="submit">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
