import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="border rounded-lg p-6 space-y-4 flex-row">
        <div>
          <img src={project.picture} alt="Preview Picture" />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <p>{project.description}</p>

          {project.learnings && (
            <p className="text-sm opacity-80">
              <strong>Learnings:</strong> {project.learnings}
            </p>
          )}

          <ul className="flex flex-wrap gap-2 text-sm">
            {project.tech.map((item) => (
              <li key={item} className="px-2 py-1 border rounded">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 text-sm">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub Repository
              </a>
            )}

            {project.site && (
              <>
                <button
                  onClick={() => setShowPreview(true)}
                  className="underline"
                >
                  Live Preview
                </button>

                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Project Website
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 w-[90vw] h-[80vh] rounded-lg overflow-hidden relative">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-3 right-4 text-sm underline z-10"
            >
              Close
            </button>

            <iframe
              src={project.site}
              title={`${project.title} preview`}
              className="w-full h-full border-none"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
