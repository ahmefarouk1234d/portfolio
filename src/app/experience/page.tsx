"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const experiences = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-grade web applications serving 100K+ users. Architecting scalable solutions with Next.js, TypeScript, and Firebase.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led a team of 5 developers in agile environment",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Mentored junior developers and conducted code reviews",
    ],
    tech: ["Next.js", "TypeScript", "Firebase", "AWS", "Docker"],
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Cairo, Egypt",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, from MVPs to production-ready applications. Collaborated with designers and product managers.",
    achievements: [
      "Built 15+ responsive web applications",
      "Integrated payment gateways (Stripe, PayPal)",
      "Improved SEO rankings for client websites by 200%",
      "Implemented real-time features using WebSocket",
    ],
    tech: ["React", "Node.js", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "StartupHub",
    location: "Cairo, Egypt",
    period: "2019 - 2020",
    description:
      "Focused on creating engaging user interfaces and improving user experience. Worked closely with UX designers to bring designs to life.",
    achievements: [
      "Developed reusable component library used across 10+ projects",
      "Improved accessibility scores to WCAG AA standard",
      "Reduced bundle size by 40% through optimization",
      "Participated in daily standups and sprint planning",
    ],
    tech: ["React", "JavaScript", "CSS3", "Material-UI", "Jest"],
  },
  {
    id: "4",
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Cairo, Egypt",
    period: "2018 - 2019",
    description:
      "Started my professional journey building websites and learning best practices. Gained hands-on experience with modern web technologies.",
    achievements: [
      "Created 20+ client websites using various CMS platforms",
      "Learned and applied responsive design principles",
      "Collaborated with team members on project deliverables",
      "Participated in client meetings and requirement gathering",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "Bootstrap"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto"
          >
            Over 5 years of professional experience building web applications and
            leading development teams.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-pink-500 opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot with gradient */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                  className={`absolute top-0 ${
                    index % 2 === 0
                      ? "md:right-0 left-0"
                      : "md:left-0 left-0"
                  } transform ${
                    index % 2 === 0
                      ? "md:translate-x-1/2"
                      : "md:-translate-x-1/2"
                  } z-10`}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full border-4 border-[var(--background)]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 blur-md opacity-50"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="ml-8 md:ml-0">
                  <Card>
                    <div className="mb-3">
                      <Badge variant="gradient">{exp.period}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[var(--muted)] mb-3">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-[var(--muted)] mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-sm text-[var(--muted)]">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-cyan-500 mt-1">✓</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.15 + 0.6 + idx * 0.03 }}
                        >
                          <Badge variant="primary">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
