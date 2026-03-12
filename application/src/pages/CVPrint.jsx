import { useLanguage } from "../context/LanguageContext";
import { cvDE } from "../data/cv.de";
import { cvEN } from "../data/cv.en";

export default function CVPrint() {
  const { language } = useLanguage();
  const cv = language === "de" ? cvDE : cvEN;

  return (
    <main className="max-w-3xl mx-auto p-8 text-black bg-white">
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
      </section>
    </main>
  );
}
