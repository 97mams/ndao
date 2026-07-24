import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button.tsx";

export function Home() {

  return (
     <section className="relative text-white min-h-[80vh] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl text-accent-foreground font-extrabold leading-tight drop-shadow-lg">
          Enregistrez vos plateformes & sites facilement
        </h1>
        <p className="mt-6 text-lg md:text-xl text-accent-foreground">
          Gérez vos informations de manière rapide, organisée et sécurisée. Un
          seul endroit pour tout centraliser.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={"/"}
          >
            <Button>
                Commencer
            </Button>
          </Link>
          <Link
            to="/"
          >
            <Button variant={"secondary"} size={"lg"}>
                En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}