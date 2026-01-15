import { useState } from "react";
import { cn } from "../lib/utils"
import { FaHtml5, FaReact, FaAngular, FaNode, FaPython } from "react-icons/fa";
import { FaJava, FaDocker, FaJenkins, FaGitAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiPhp, SiGithubactions, SiCircleci, SiRender } from "react-icons/si";
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

export const SkillsSection = () => {
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
};

