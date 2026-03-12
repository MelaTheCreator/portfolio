import profileImg from "../assets/profile.jpeg";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { content, language } = useLanguage();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* Image */}
        <div>
          <img
            src={profileImg}
            alt="Portrait of Melanie Heß"
            className="rounded-lg w-full max-w-sm"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {language === "de" ? "Über mich" : "About me"}
          </h2>

          <p className="leading-relaxed whitespace-pre-line mb-6">
            {content.about.text}
          </p>

          {/* Personal details */}
          <ul className="text-sm space-y-2 opacity-80">
            <li>
              <strong>Name:</strong> Melanie Heß
            </li>
            <li>
              <strong>Location:</strong> Leipzig, Germany
            </li>
            <li>
              <strong>Languages:</strong> German (native), English (fluent)
            </li>
            <li>
              <strong>Focus:</strong> Frontend Development (React)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
