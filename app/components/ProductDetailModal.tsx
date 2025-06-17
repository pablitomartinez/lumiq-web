// app/components/ProductDetailModal.js
"use client";
import { useEffect, MouseEvent, useState, useCallback } from "react";

// Definir tipo de producto
interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description?: string;
}

// Props del modal
interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  // Animación de salida
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleClose]);
  

  // Backdrop click
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  // WhatsApp click (sin cambios)
  const handleWhatsAppClick = () => {
    const message = `Hola! Me interesa el producto: ${product.name}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

//   // Backdrop click
//   const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleWhatsAppClick = () => {
//     const message = `Hola! Me interesa el producto: ${product.name}. ¿Podrías darme más información?`;
//     const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh]  bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isClosing ? "animate-fadeOutScale" : "animate-fadeInScale"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Cerrar modal"
        >
          <svg
            className="w-6 h-6 text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/2 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
          </div>

          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <span className="inline-block bg-primary text-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>

              <h2
                id="modal-title"
                className="text-2xl lg:text-3xl font-bold text-secondary mb-4 leading-tight"
              >
                {product.name}
              </h2>

              <p
                id="modal-description"
                className="text-secondary text-base lg:text-lg leading-relaxed mb-6"
              >
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-secondary text-lg font-semibold text-dark mb-3">
                  Características:
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Impreso en 3D con alta precisión</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="..." clipRule="evenodd" />
                    </svg>
                    <span>Material resistente y duradero</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="..." clipRule="evenodd" />
                    </svg>
                    <span>Diseño único y exclusivo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="..." clipRule="evenodd" />
                    </svg>
                    <span>Entrega rápida y segura</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3"
              >
                {/* Ícono de WhatsApp */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
                <span>Pedir por WhatsApp</span>
              </button>
              <p className="text-sm text-gray-500 text-center mt-3">
                Te responderemos en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
