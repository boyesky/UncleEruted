/* ------------------------------------------------------------------
   Full-screen gallery for one portfolio section
   Location: src/components/GalleryViewer.jsx
------------------------------------------------------------------- */
import { useState, useEffect, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900";

export default function GalleryViewer({ section, onClose }) {
  const [index, setIndex] = useState(0);
  const total = section.images.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );

  // Keyboard controls + lock page scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, next, prev]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white"
      role="dialog"
      aria-modal="true"
      aria-label={`${section.title} gallery`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div>
          <h2 className="text-lg font-medium text-neutral-900">
            {section.title}
          </h2>
          <p className="text-sm text-neutral-500">
            {index + 1} of {total}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className={`rounded p-2 text-2xl text-neutral-700 hover:bg-neutral-100 ${focusRing}`}
        >
          <IoCloseSharp />
        </button>
      </div>

      {/* Main image */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        {total > 1 && (
          <button
            onClick={prev}
            aria-label="Previous image"
            className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-2xl text-neutral-700 hover:bg-neutral-100 sm:left-5 ${focusRing}`}
          >
            ‹
          </button>
        )}

        <img
          key={section.images[index]}
          src={section.images[index]}
          alt={`${section.title} photo ${index + 1}`}
          className="max-h-full max-w-full object-contain"
        />

        {total > 1 && (
          <button
            onClick={next}
            aria-label="Next image"
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-2xl text-neutral-700 hover:bg-neutral-100 sm:right-5 ${focusRing}`}
          >
            ›
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto px-5 py-4 sm:justify-center sm:px-8">
          {section.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === index}
              className={`h-16 w-16 shrink-0 overflow-hidden transition-opacity ${focusRing} ${
                i === index
                  ? "opacity-100 ring-2 ring-neutral-900"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
