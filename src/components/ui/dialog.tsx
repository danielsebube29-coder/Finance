import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export function Dialog({
  title,
  description,
  onClose,
  children,
}: {
  title: string;
  description: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="overlay-fade fixed inset-0 z-50 bg-fg/40" />
        <DialogPrimitive.Content className="dialog-panel dialog-pop fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-card outline-none">
          <div className="flex items-start justify-between gap-3">
            <DialogPrimitive.Title className="font-display text-2xl leading-tight text-fg">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              aria-label="Close"
              className="pressable -mr-2 -mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-track hover:text-fg"
            >
              <X className="size-4" aria-hidden />
            </DialogPrimitive.Close>
          </div>
          <DialogPrimitive.Description className="mt-2 text-sm text-muted">
            {description}
          </DialogPrimitive.Description>
          <div className="mt-5">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
