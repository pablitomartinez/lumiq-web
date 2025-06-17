export default function CTAButtons() {
  return (
    <section className="py-12 bg-gradient-to-b from-accent to-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          <button className="group w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Ver Catálogo
          </button>

          <button className="group w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 group-hover:bounce transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
