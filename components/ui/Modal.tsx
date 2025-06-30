"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react"; // Using lucide-react for close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[1001] flex items-center justify-center p-4"
      onClick={onClose} // Close on overlay click
    >
      <div
        className="relative w-full max-w-3xl bg-dark-blue-2 p-6 sm:p-8 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-white hover:text-gold transition-colors"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>
        {title && (
          <h3 className="text-2xl font-semibold text-light-gold mb-4">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
