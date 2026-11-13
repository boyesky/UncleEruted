/* ------------------------------------------------------------------
   Portfolio page: grid of square covers
   Location: src/pages/Portfolio.jsx (adjust the import paths below
   if your page lives in a different folder)
------------------------------------------------------------------- */
import { useState } from "react";
import sections from "../data/portfolioSections";
import GalleryViewer from "../components/GalleryViewer";

export default function Portfolio() {
  const [active, setActive] = useState(null); // the section being viewed

  return (
    <main className="min-h-screen bg-white">
      <header className="px-5 pb-6 pt-10 sm:px-8">
        <h1 className="font-poppins text-3xl font-bold uppercase text-[#ae44cb]">
          Portfolio
        </h1>
      </header>

      <ul className="grid grid-cols-1 gap-1 px-1 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => setActive(section)}
              className="group relative block aspect-square w-full overflow-hidden bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              aria-label={`Open ${section.title} gallery, ${section.images.length} photos`}
            >
              <img
                src={section.images[0]}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title appears on hover (always visible on touch screens) */}
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-left opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <span className="text-base font-medium text-white">
                  {section.title}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <GalleryViewer section={active} onClose={() => setActive(null)} />
      )}
    </main>
  );
}
