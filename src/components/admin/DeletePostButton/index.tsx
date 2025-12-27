"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }
  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);

      console.log(`O result é: ${result}`);

      setShowDialog(false);
    });
  }

  return (
    <>
      <button
        className="text-red-500 cursor-pointer transition [&_svg]:w-4 [&_svg]:h-4 hover:scale-120 hover:text-red-700
      disabled:text-slate-600 disabled:cursor-not-allowed"
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title="Confirmar exclusão"
          content={`Tem certeza que deseja excluir este post:
             ${title}`}
          onConfirm={handleConfirm}
          onCancel={() => setShowDialog(false)}
          disabled={isPending}
        />
      )}
    </>
  );
}
