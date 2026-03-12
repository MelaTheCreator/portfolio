import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { content } = useLanguage();
  const { home } = content;

  return (
    <section className="px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{home.title}</h1>

      <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
        {home.subtitle}
      </p>

      <p className="leading-relaxed mb-10">{home.intro}</p>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/projects" className="underline">
          {home.ctaProjects}
        </Link>
        <Link to="/about" className="underline">
          {home.ctaAbout}
        </Link>
      </div>
    </section>
  );
}
