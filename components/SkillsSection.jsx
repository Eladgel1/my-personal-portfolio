"use client";

import {
  FaReact,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaHtml5,
} from "react-icons/fa";
import {
  IoLogoJavascript,
} from "react-icons/io5";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiGithubactions,
  SiLinux,
  SiMocha,
  SiJest,
  SiPytest,
  SiK6,
  SiApachejmeter,
  SiPython,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    title: "Frontend",
    icon: FaReact,
    description:
      "Building modern and responsive UIs with reusable components and strong typing.",
    skills: [
      { name: "JavaScript", icon: IoLogoJavascript, link: "https://devdocs.io/javascript/" },
      { name: "TypeScript", icon: BiLogoTypescript, link: "https://www.typescriptlang.org/docs/" },
      { name: "React", icon: FaReact, link: "https://react.dev/reference/react"  },
      { name: "HTML", icon: FaHtml5, link: "https://devdocs.io/html/" },
      { name: "Tailwind", icon: RiTailwindCssFill, link: "https://v2.tailwindcss.com/docs"  },
    ],
  },
  {
    category: "Backend & Databases",
    title: "Backend & Databases",
    icon: FaNode,
    description:
      "Designing scalable APIs and data layers with focus on reliability and clarity.",
    skills: [
      { name: "Node.js", icon: FaNode, link: "https://devdocs.io/node/"  },
      { name: "Express.js", icon: SiExpress, link: "https://devdocs.io/express/"  },
      { name: "Python", icon: SiPython, link: "https://www.python.org/doc/"  },
      { name: "Java", icon: FaJava, link: "https://docs.oracle.com/en/java/"  },
      { name: "MongoDB", icon: BiLogoMongodb, link: "https://www.mongodb.com/docs/"  },
      { name: "PostgreSQL", icon: BiLogoPostgresql, link: "https://www.postgresql.org/docs/"  },
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Delivery",
    icon: FaDocker,
    description:
      "Taking projects from laptop to production with containers, Git and automated pipelines.",
    skills: [
      { name: "Docker", icon: FaDocker, link: "https://docs.docker.com/"  },
      { name: "Git", icon: FaGitAlt, link: "https://devdocs.io/git/"  },
      { name: "CI/CD", icon: SiGithubactions, link: "https://docs.gitlab.com/ci/pipelines/"  },
      { name: "GitHub Actions", icon: SiGithubactions, link: "https://docs.github.com/en/actions"  },
      { name: "Linux", icon: SiLinux, link: "https://docs.kernel.org/"  },
    ],
  },
  {
    category: "Testing",
    title: "Testing & Performance",
    icon: SiJest,
    description:
      "Keeping systems stable with unit tests, integration tests and end to end testing.",
    skills: [
      { name: "Jest", icon: SiJest, link: "https://jestjs.io/docs/getting-started"  },
      { name: "Pytest", icon: SiPytest, link: "https://docs.pytest.org/en/stable/"  },
      { name: "Mocha", icon: SiMocha, link: "https://devdocs.io/mocha/"  },
      { name: "K6", icon: SiK6, link: "https://grafana.com/docs/k6/latest/"  },
      { name: "JMeter", icon: SiApachejmeter, link: "https://jmeter.apache.org/"  },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A focused stack of my skills around Full-Stack development, DevOps practices and testing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <article
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl"
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <p className="relative text-sm md:text-base text-muted-foreground mb-5">
                  {group.description}
                </p>

                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/70 px-3 py-1.5 text-xs md:text-sm font-medium tracking-tight transition-all duration-200 hover:bg-primary/90 hover:text-primary-foreground hover:border-primary/80 hover:scale-105 cursor-pointer"
                      >
                        {SkillIcon && (
                          <SkillIcon className="h-4 w-4 md:h-4.5 md:w-4.5"/>
                        )}
                        {skill.name}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

