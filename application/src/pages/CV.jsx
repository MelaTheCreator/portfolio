import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { cvDE } from "../data/cv.de";
import { cvEN } from "../data/cv.en";

export default function CV() {
  const { language } = useLanguage();
  const cv = language === "de" ? cvDE : cvEN;

  const [openKey, setOpenKey] = useState(null);

  const toggleSkills = (sectionKey, index) => {
    const key = `${sectionKey}-${index}`;
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
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-8">{cv.education.title}</h3>
          {renderEntries("education", cv.education)}
        </section>
      </div>
      <a
        href="/about/cv/print"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline block text-center mb-12 mt-12"
      >
        {language === "de"
          ? "Lebenslauf drucken / als PDF speichern"
          : "Print CV / Save as PDF"}
      </a>
    </section>
  );
}
