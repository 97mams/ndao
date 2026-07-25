import { Link } from "@tanstack/react-router";

export function Home() {

  return (
     <section className="relative text-white min-h-[80vh] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl text-accent-foreground font-extrabold leading-tight drop-shadow-lg">
          Ndao
        </h1>
        <p className="mt-6 text-lg md:text-xl text-accent-foreground">
          Est une template de base.
        </p>

      </div>
    </section>
  );
}