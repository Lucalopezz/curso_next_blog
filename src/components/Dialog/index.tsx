"use client";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled,
}: DialogProps) {
  /* inset-0 can replace top-0 bottom-0 
          right-0 left-0*/
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;
    onCancel();
  }
  return (
    <div
      className="fixed z-50 top-0 bottom-0 
          right-0 left-0 bg-black/50  backdrop-blur-xs
          flex items-center justify-center"
      onClick={handleCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-200 p-6 
          rounded-lg max-w-2xl mx-6
          flex flex-col gap-6
          shadow-lg shadow-black/35 text-center"
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className="bg-slate-400 text-slate-950
              hover:bg-slate-500 transition
              flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer
              disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            disabled={disabled}
            autoFocus
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={disabled}
            className="bg-blue-500 text-blue-50
              hover:bg-blue-600 transition
              flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer
              disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
