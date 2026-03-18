import { useLanguage } from "../context/LanguageContext";

export default function Impressum() {
  const { language } = useLanguage();

  const isDE = language === "de";

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        {isDE ? "Impressum" : "Legal Notice"}
      </h2>

      <div className="space-y-12 text-sm leading-relaxed">
        {/* §5 TMG */}
        <section>
          <h3 className="text-lg font-semibold mb-4">
            {isDE
              ? "Angaben gemäß § 5 TMG"
              : "Information according to § 5 TMG"}
          </h3>

          <p className="opacity-80">
            Melanie Heß
            <br />
            Tarostr. 15
            <br />
            04103 Leipzig
            <br />
            Germany
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">
            {isDE ? "Kontakt" : "Contact"}
          </h3>

          <p className="opacity-80">
            {isDE ? "E-Mail:" : "Email:"}{" "}
            <a
              href="mailto:melaniehe@t-online.de"
              className="underline underline-offset-4"
            >
              melaniehe@t-online.de
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">
            {isDE ? "Berufsbezeichnung" : "Professional Title"}
          </h3>

          <p className="opacity-80">
            {isDE
              ? "Webentwicklerin in Ausbildung"
              : "Web Developer (in training)"}
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">
            {isDE
              ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
              : "Responsible for content according to § 55 Abs. 2 RStV"}
          </h3>

          <p className="opacity-80">
            Melanie Heß
            <br />
            Germany
          </p>
        </section>
      </div>
    </section>
  );
}
