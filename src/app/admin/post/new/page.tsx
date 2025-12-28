import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputCheckbox } from "@/components/InputCheckbox";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <Input labelText="Nome" placeholder="Digite seu nome" type="password" />

        <Input labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox labelText="Sobrenome" />

        <Input
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
        />

        <Input
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
        />

        <Input
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          readOnly
        />

        <Input
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
          readOnly
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
