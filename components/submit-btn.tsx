import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white dark:text-paper hover:opacity-90 disabled:opacity-60 transition"
      disabled={pending}
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white dark:border-paper/40 dark:border-t-paper" />
      ) : (
        <FaPaperPlane className="text-xs" aria-hidden />
      )}
      {pending ? "Sending" : "Send message"}
    </button>
  );
}

export default SubmitButton;
