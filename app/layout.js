import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import { Toaster } from "@/components/ui/toaster";


export const metadata = {
  metadataBase: new URL("https://elad-personal-portfolio.vercel.app"),

  title: {
    default: "Elad Gelerenter - Full Stack Developer & DevOps",
    template: "%s | Elad Gelerenter",
  },

  description:
    "Portfolio of Elad Gelerenter, a Software Engineer with practical experience in full-stack development and DevOps. Focused on building scalable, reliable applications and writing clean, maintainable code.",

  icons: {
    icon: "/portfolio-bag.svg"
  },

  keywords: [
    "Elad Gelerenter",
    "Elad Gel",
    "Software Engineer",
    "Full Stack Developer",
    "Backend",
    "Frontend",
    "DevOps",
    "Node.js",
    "React",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Elad Gelerenter - Full Stack Developer & DevOps",
    description:
      "Portfolio of Elad Gelerenter, a Software Engineer with practical experience in full-stack development and DevOps.",
    siteName: "Elad Gelerenter Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Elad Gelerenter's portfolio website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elad Gelerenter - Full Stack Developer & DevOps",
    description:
      "Portfolio of Elad Gelerenter, a Software Engineer with practical experience in full-stack development and DevOps.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* Toggle Theme */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navigation Bar*/}
        <Navbar />

        {/* Every page content */}
        {children}

        {/* Notifications for toaster */}
        <Toaster />
      </body>
    </html>
  );
}
