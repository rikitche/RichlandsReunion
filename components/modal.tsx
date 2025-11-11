"use client";
import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  // Optional: prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* prevent click propagation so clicks inside modal don't close it */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white rounded-2xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 mx-4 ${
          className || ""
        }`}
      >
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

        <div>{children}</div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
