import { useLanguage } from "../context/LanguageContext";
import { cvDE } from "../data/cv.de";
import { cvEN } from "../data/cv.en";
import { useTheme } from "../context/ThemeContext";

export default function CVPrint() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const cv = language === "de" ? cvDE : cvEN;

  function handlePrint() {
    window.print();
  }

  const buttonClass =
    theme === "dark"
      ? "px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      : "px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-400";

  const buttonText =
    language === "de" ? "Drucken / Als PDF speichern" : "Print / Save as PDF";

  return (
    <main
      className={`max-w-3xl mx-auto p-8 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-3xl font-bold mb-8">Melanie Heß</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">{cv.experience.title}</h2>

        {cv.experience.entries.map((entry, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold">{entry.role}</h3>
            <p className="text-sm">
              {entry.place} · {entry.period}
            </p>

            <ul className="list-disc list-inside text-sm mt-2">
              {entry.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">{cv.education.title}</h2>
        {cv.education.entries.map((entry, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold">{entry.degree}</h3>
            <p className="text-sm">
              {entry.place} · {entry.period}
            </p>

            <ul className="list-disc list-inside text-sm mt-2">
              {entry.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex gap-4 mb-8">
          <button onClick={handlePrint} className={buttonClass}>
            {buttonText}
          </button>
        </div>
      </section>
    </main>
  );
}
