/*import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Cozy Cup",
        description: "A modern café platform that offers a seamless ordering, reservation experience and real-time user features.",
        image: "/projects/project-1.webp",
        tags: ["React", "TailwindCSS", "Node.js"],
        demoUrl: "https://cozycup-frontend.onrender.com/",
        githubUrl: "https://github.com/Eladgel1/CozyCup-frontend"
    },
    {
        id: 2,
        title: "PawPal Network",
        description: "Social platform where pet owners can connect, share moments, and build communities around their pets.",
        image: "/projects/project-2.webp",
        tags: ["Angular", "CSS", "MongoDB"],
        demoUrl: "https://pawpal-network-frontend.onrender.com/",
        githubUrl: "https://github.com/Eladgel1/PawPal-Network"
    },
    {
        id: 3,
        title: "VertiClean",
        description: "An immersive VR experience that helps users gradually overcome fear of heights through realistic and controlled simulations.",
        image: "/projects/project-3.webp",
        tags: ["C#", "Unity"],
        demoUrl: "#",
        githubUrl: "https://github.com/Eladgel1/VertiClean"
    },
    {
        id: 4,
        title: "Flight Site",
        description: "Flight booking web application platform that lets users search, compare, and reserve flights effortlessly.",
        image: "/projects/project-4.webp",
        tags: ["Angular", "Node.js", "Docker"],
        demoUrl: "https://flight-site-client.onrender.com/",
        githubUrl: "https://github.com/Roei01/Flight_Site_client"
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured 
                    <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    Created with attention to detail, performance, stability and user experience.
                </p>

                <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={project.imageWidth || 1200}
                                    height={project.imageHeight || 800}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                      <span
                                      key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>  
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={22}/></a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={22}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Eladgel1">
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};*/

import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CozyCup",
    subtitle: "Full-stack café management platform",
    description:
      "A complete platform for coffee shops that streamlines online ordering, reservations, and digital passes in a single experience.",
    image: "/projects/project-1.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Designed and implemented the full-stack architecture with RESTful APIs and clear separation of concerns.",
      "Built a responsive, modern UI with smooth interactions for ordering, reservations, and menu browsing.",
      "Integrated authentication and role-based flows to support both customers and staff operations.",
    ],
    demoUrl: "https://cozycup-frontend.onrender.com/",
    githubUrl: "https://github.com/Eladgel1/CozyCup-frontend",
  },
  {
    id: 2,
    title: "PawPal Network",
    subtitle: "Social network for pet owners",
    description:
      "A social platform that lets pet owners connect, share moments, and build communities around their pets.",
    image: "/projects/project-2.webp",
    tags: ["Angular", "CSS", "MongoDB"],
    highlights: [
      "Implemented core social features like posts, likes, and profile views for pet owners.",
      "Built a clean, component-based Angular frontend with reusable UI elements.",
      "Designed MongoDB data models to support scalable feeds and user interactions.",
    ],
    demoUrl: "https://pawpal-network-frontend.onrender.com/",
    githubUrl: "https://github.com/Eladgel1/PawPal-Network",
  },
  {
    id: 3,
    title: "VertiClean",
    subtitle: "VR exposure therapy experience",
    description:
      "An immersive VR application that helps users gradually overcome fear of heights via controlled scenarios.",
    image: "/projects/project-3.webp",
    tags: ["C#", "Unity"],
    highlights: [
      "Developed interactive VR environments that progressively increase difficulty and height exposure.",
      "Implemented C# scripts to manage game logic, progression, and user feedback.",
      "Collaborated on UX flows to keep sessions structured, safe, and measurable.",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Eladgel1/VertiClean",
  },
  {
    id: 4,
    title: "Flight Site",
    subtitle: "Flight search and booking platform",
    description:
      "A web application for searching, comparing and reserving flights with a clean, user-friendly interface.",
    image: "/projects/project-4.webp",
    tags: ["Angular", "Node.js", "Docker"],
    highlights: [
      "Built flight search and filtering UI with Angular and reusable components.",
      "Worked with a Node.js backend to consume and display flight data.",
      "Containerized the app with Docker to make local development and deployment more predictable.",
    ],
    demoUrl: "https://flight-site-client.onrender.com/",
    githubUrl: "https://github.com/Roei01/Flight_Site_client",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my experience in full-stack
          development, frontend architecture, and DevOps practices.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card/80 border border-border/60 rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs uppercase tracking-wide text-primary/80">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 bg-secondary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Eladgel1"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
