/*"use client";

import { useState } from "react";
import { cn } from "../lib/utils"
import { FaHtml5, FaReact, FaAngular, FaNode, FaPython } from "react-icons/fa";
import { FaJava, FaDocker, FaJenkins, FaGitAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiPhp, SiGithubactions, SiCircleci, SiRender, SiMocha } from "react-icons/si";
import { SiGithub, SiPytest, SiJest, SiPostman, SiK6, SiApachejmeter } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { GoWorkflow } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";

const skills = [

    // Frontend
    {name: "HTML", logo: <FaHtml5 />, category: "frontend"},
    {name: "CSS", logo: <DiCss3 />, category: "frontend"},
    {name: "Tailwind", logo: <RiTailwindCssFill />, category: "frontend"},
    {name: "React", logo: <FaReact />, category: "frontend"},
    {name: "Angular", logo: <FaAngular />, category: "frontend"},
    {name: "Java Script", logo: <IoLogoJavascript />, category: "frontend"},
    {name: "Type Script", logo: <BiLogoTypescript />, category: "frontend"},

    // Backend
    {name: "Node.js", logo: <FaNode />, category: "backend"},
    {name: "Express.js", logo: <SiExpress />, category: "backend"},
    {name: "REST APIs", logo: <AiOutlineApi />, category: "backend"},
    {name: "Python", logo: <FaPython />, category: "backend"},
    {name: "Java", logo: <FaJava />, category: "backend"},
    {name: "PHP", logo: <SiPhp />, category: "backend"},
    {name: "C#", logo: <TbBrandCSharp />, category: "backend"},
    {name: "MongoDB", logo: <BiLogoMongodb />, category: "backend"},
    {name: "PostgreSQL", logo: <BiLogoPostgresql />, category: "backend"},

    // DevOps
    {name: "Docker", logo: <FaDocker />, category: "devops"},
    {name: "CI/CD Workflows", logo: <GoWorkflow />, category: "devops"},
    {name: "GitHub Actions", logo: <SiGithubactions />, category: "devops"},
    {name: "Jenkins", logo: <FaJenkins />, category: "devops"},
    {name: "CircleCI", logo: <SiCircleci />, category: "devops"},
    {name: "Render", logo: <SiRender />, category: "devops"},

    // Tools
    {name: "Git", logo: <FaGitAlt />, category: "tools"},
    {name: "GitHub", logo: <SiGithub />, category: "tools"},
    {name: "Pytest", logo: <SiPytest />, category: "tools"},
    {name: "Jest", logo: <SiJest />, category: "tools"},
    {name: "Postman", logo: <SiPostman />, category: "tools"},
    {name: "K6", logo: <SiK6 />, category: "tools"},
    {name: "JMeter", logo: <SiApachejmeter />, category: "tools"},
    {name: "VS Code", logo: <VscVscode />, category: "tools"}
];

const categories = ["all", "frontend", "backend", "devops", "tools"];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => (
        activeCategory === "all" || skill.category === activeCategory
    ));

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 justify-items-center">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-4 rounded-lg shadow-xs card-hover flex flex-col items-center gap-4 w-46"
                        >
                            <h3 className="font-semibold text-lg text-center">
                                {skill.name}
                            </h3>
                            <div className="text-6xl">
                                {skill.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};*/


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
      "Building modern, responsive UIs with reusable components and strong typing.",
    skills: [
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "React", icon: FaReact },
      { name: "HTML", icon: FaHtml5},
      { name: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  {
    category: "Backend & Databases",
    title: "Backend & Databases",
    icon: FaNode,
    description:
      "Designing scalable APIs and data layers with focus on reliability and clarity.",
    skills: [
      { name: "Node.js", icon: FaNode },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "MongoDB", icon: BiLogoMongodb },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Delivery",
    icon: FaDocker,
    description:
      "Taking projects from laptop to production with containers, Git and automated pipelines.",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    category: "Testing",
    title: "Testing & Performance",
    icon: SiJest,
    description:
      "Keeping systems stable with unit tests, integration tests and load testing.",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Pytest", icon: SiPytest },
      { name: "Mocha", icon: SiMocha },
      { name: "K6", icon: SiK6 },
      { name: "JMeter", icon: SiApachejmeter },
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
          A focused stack around modern web development, DevOps practices and testing,
          used end-to-end across real projects.
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
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/70 px-3 py-1.5 text-xs md:text-sm font-medium tracking-tight transition-all duration-200 hover:bg-primary/90 hover:text-primary-foreground hover:border-primary/80 hover:scale-105 cursor-pointer"
                      >
                        {SkillIcon && (
                          <SkillIcon className="h-4 w-4 md:h-4.5 md:w-4.5" />
                        )}
                        {skill.name}
                      </span>
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


