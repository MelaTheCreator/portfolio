import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { projects, language } = useLanguage();

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {language === "de" ? "Projekte" : "Projects"}
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
