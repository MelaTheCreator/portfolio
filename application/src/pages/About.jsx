import { content } from "../data/content.de";

export default function About() {
  return (
    <section className="px-6 py-20 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Über mich</h2>
      <p className="leading-relaxed whitespace-pre-line">
        {content.about.text}
      </p>
    </section>
  );
}
