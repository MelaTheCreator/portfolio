import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { content } = useLanguage();

  return (
    <section className="px-6 py-20 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">{content.about.heading}</h2>
      <p className="leading-relaxed whitespace-pre-line">
        {content.about.text}
      </p>
    </section>
  );
}
