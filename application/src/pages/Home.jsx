import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { content } = useLanguage();

  return (
    <section className="px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{content.hero.title}</h1>
      <p className="max-w-xl text-lg">{content.hero.subtitle}</p>
    </section>
  );
}
