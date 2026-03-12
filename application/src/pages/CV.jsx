import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { cvDE } from "../data/cv.de";
import { cvEN } from "../data/cv.en";

export default function CV() {
  const { language } = useLanguage();
  const cv = language === "de" ? cvDE : cvEN;

  const [openKey, setOpenKey] = useState(null);
  const [showAdditional, setShowAdditional] = useState(false);

  const toggleSkills = (section, index) => {
    const key = `${section}-${index}`;
    setOpenKey(openKey === key ? null : key);
  };

  const renderEntries = (sectionKey, section) => (
    <div className="space-y-12">
      {section.entries.map((entry, index) => {
        const isOpen = openKey === `${sectionKey}-${index}`;

        return (
          <div key={index} className="border-b pb-8">
            <h4 className="text-lg font-semibold">
              {entry.role || entry.degree}
            </h4>

            <p className="opacity-80 mb-4 text-sm">
              {entry.place} · {entry.period}
            </p>

            <button
              onClick={() => toggleSkills(sectionKey, index)}
              className="text-sm underline"
              aria-expanded={isOpen}
            >
              {isOpen ? section.hideSkills : section.showSkills}
            </button>

            {isOpen && (
              <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
                {entry.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">{cv.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <h3 className="text-2xl font-semibold mb-8">{cv.experience.title}</h3>

          {renderEntries("experience", cv.experience)}

          {!showAdditional && (
            <button
              onClick={() => setShowAdditional(true)}
              className="mt-8 text-sm underline"
            >
              {language === "de"
                ? "Weitere berufliche Erfahrungen anzeigen"
                : "Show additional professional experience"}
            </button>
          )}
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-8">{cv.education.title}</h3>

          {renderEntries("education", cv.education)}
        </section>
      </div>
      {showAdditional && (
        <section className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {cv.additional.title}
          </h3>

          <p className="text-sm opacity-80 mb-12 text-center">
            {cv.additional.intro}
          </p>

          <div className="space-y-10">
            {cv.additional.entries.map((entry, index) => (
              <div key={index}>
                <h4 className="font-semibold">{entry.role}</h4>
                <p className="text-sm opacity-80">
                  {entry.place} · {entry.period}
                </p>

                <ul className="list-disc list-inside text-sm mt-2">
                  {entry.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAdditional(false)}
              className="text-sm underline"
            >
              {language === "de"
                ? "Weitere Erfahrungen ausblenden"
                : "Hide additional experience"}
            </button>
          </div>
        </section>
      )}{" "}
      <a
        href="/about/cv/print"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline block text-center mb-12 mt-24"
      >
        {language === "de"
          ? "Lebenslauf drucken / als PDF speichern"
          : "Print CV / Save as PDF"}
      </a>
    </section>
  );
}
