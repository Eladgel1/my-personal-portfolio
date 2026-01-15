import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Cozy Cup",
        description: "A modern café platform that offers a seamless ordering, reservation experience and real-time user features.",
        image: "/projects/project1.jpg",
        tags: ["React", "TailwindCSS", "Node.js"],
        demoUrl: "https://cozycup-frontend.onrender.com/",
        githubUrl: "https://github.com/Eladgel1/CozyCup-frontend"
    },
    {
        id: 2,
        title: "PawPal Network",
        description: "Social platform where pet owners can connect, share moments, and build communities around their pets.",
        image: "/projects/project2.jpg",
        tags: ["Angular", "CSS", "MongoDB"],
        demoUrl: "https://pawpal-network-frontend.onrender.com/",
        githubUrl: "https://github.com/Eladgel1/PawPal-Network"
    },
    {
        id: 3,
        title: "VertiClean",
        description: "An immersive VR experience that helps users gradually overcome fear of heights through realistic and controlled simulations.",
        image: "/projects/project3.png",
        tags: ["C#", "Unity"],
        demoUrl: "#",
        githubUrl: "https://github.com/Eladgel1/VertiClean"
    },
    {
        id: 4,
        title: "Flight Site",
        description: "Flight booking web application platform that lets users search, compare, and reserve flights effortlessly.",
        image: "/projects/project4.jpg",
        tags: ["Angular", "Node.js", "Docker"],
        demoUrl: "https://flight-site-client.onrender.com/",
        githubUrl: "https://github.com/Roei01/Flight_Site_client"
    }
]

export const ProjectsSection = () => {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>  
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
};