import { Input } from "@/components/Input";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <Input labelText="Nome" placeholder="Digite seu nome" type="text" />

      <Input
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        type="text"
      />
      <Input
        disabled
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        type="text"
        defaultValue="teste"
      />
      <Input
        disabled
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        type="text"
      />
      <Input
        readOnly
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        type="text"
      />
    </div>
  );
}
