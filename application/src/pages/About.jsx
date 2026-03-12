import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpeg";

export default function About() {
  const { content, language } = useLanguage();
  const { about } = content;

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* Image */}
        <div>
          <img
            src={profileImg}
            alt={
              language === "de"
                ? "Porträt von Melanie Heß"
                : "Portrait of Melanie Heß"
            }
            className="rounded-lg w-full max-w-sm"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{about.heading}</h2>

          <p className="leading-relaxed whitespace-pre-line mb-8">
            {about.text}
          </p>

          {/* Personal details */}
          <ul className="text-sm space-y-2 opacity-80 mb-8">
            <li>
              <strong>{language === "de" ? "Name:" : "Name:"}</strong> Melanie
              Heß
            </li>
            <li>
              <strong>{language === "de" ? "Ort:" : "Location:"}</strong>{" "}
              Leipzig, Germany
            </li>
            <li>
              <strong>{language === "de" ? "Sprachen:" : "Languages:"}</strong>{" "}
              {language === "de"
                ? "Deutsch (Muttersprache), Englisch (fließend)"
                : "German (native), English (fluent)"}
            </li>
            <li>
              <strong>{language === "de" ? "Fokus:" : "Focus:"}</strong>{" "}
              Frontend Development (React)
            </li>
          </ul>

          {/* CV link */}
          <Link to="/about/cv" className="underline text-sm inline-block">
            {language === "de" ? "Lebenslauf ansehen" : "View CV"}
          </Link>
        </div>
      </div>
    </section>
  );
}
