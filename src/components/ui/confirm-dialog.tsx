import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { buttonVariants } from "@/components/ui/button";

export function ConfirmDialog({
  title,
  description,
  confirmLabel,
  onConfirm,
  onClose,
}: {
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <AlertDialog.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="overlay-fade fixed inset-0 z-50 bg-fg/40" />
        <AlertDialog.Content className="dialog-panel dialog-pop fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-card outline-none">
          <AlertDialog.Title className="font-display text-2xl leading-tight text-fg">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm text-muted">
            {description}
          </AlertDialog.Description>
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <AlertDialog.Cancel className={buttonVariants({ variant: "outline" })}>Keep</AlertDialog.Cancel>
            <AlertDialog.Action className={buttonVariants({ variant: "danger" })} onClick={onConfirm}>
              {confirmLabel}
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
