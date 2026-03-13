import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpeg";
import { useState, useEffect } from "react";

export default function About() {
  const { content, language } = useLanguage();
  const { about } = content;

  const skills = ["React", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"];

  const [showSkills, setShowSkills] = useState(false);
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);

  const handleClick = () => {
    setShowSkills(true);
    setCurrentSkill("");
    setSkillIndex(0);
  };

  useEffect(() => {
    if (showSkills && skillIndex < skills.length) {
      const timeout = setTimeout(() => {
        setCurrentSkill(skills[skillIndex]);
        setSkillIndex(skillIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    if (skillIndex === skills.length && showSkills) {
      const hideTimeout = setTimeout(() => {
        setShowSkills(false);
        setCurrentSkill("");
      }, 1500);
      return () => clearTimeout(hideTimeout);
    }
  }, [skillIndex, showSkills, skills]);

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto relative">
      <div className="grid gap-12 md:grid-cols-2 items-start">
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
          <div className="mt-4 flex flex-col space-y-2">
            <a
              href={about.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 underline"
            >
              LinkedIn
            </a>
            <a
              href={about.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">{about.heading}</h2>

          <p className="leading-relaxed whitespace-pre-line mb-8">
            {about.text}
          </p>

          <p className="leading-relaxed whitespace-pre-line mb-4">
            {language === "de"
              ? "Aktuell absolviere ich eine Weiterbildung zur Webentwicklerin und arbeite mit "
              : "I am currently completing a training program to become a web developer and work with "}
            <span
              className="text-grey-600 underline cursor-pointer"
              onClick={handleClick}
            >
              {language === "de"
                ? "modernen Webtechnologien"
                : "modern web technologies"}
            </span>
            .
          </p>

          {showSkills && (
            <div className="mt-4 text-green-700 font-bold text-xl">
              {currentSkill}
            </div>
          )}

          <ul className="text-sm space-y-2 opacity-80 mb-8 mt-6">
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

          <Link to="/about/cv" className="underline text-sm inline-block">
            {language === "de" ? "Lebenslauf ansehen" : "View CV"}
          </Link>
        </div>
      </div>
    </section>
  );
}
