"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material-UI",
      "Framer Motion",
      "Redux",
      "React Query",
      "Webpack",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "WebSocket",
      "Microservices",
      "Authentication",
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Firestore",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Vercel",
      "AWS",
      "Google Cloud",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Agile/Scrum",
      "TDD",
      "Unit Testing",
      "Jest",
      "Cypress",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Design & UX",
    skills: [
      "Responsive Design",
      "Accessibility (WCAG)",
      "Figma",
      "UI/UX Principles",
      "Design Systems",
      "SEO",
      "Performance Optimization",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable, and performant
            web applications from frontend to backend.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card hover={false} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.02 }}
                    >
                      <Badge variant="primary">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card hover={false}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"></div>
              <h3 className="text-2xl font-bold text-center">
                Core Competencies
              </h3>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"></div>
            </div>
            <div className="space-y-6">
              {[
                {
                  name: "Full-Stack Development",
                  level: 95,
                  description: "End-to-end application development",
                },
                {
                  name: "TypeScript/JavaScript",
                  level: 98,
                  description: "Expert-level proficiency",
                },
                {
                  name: "React & Next.js",
                  level: 97,
                  description: "Building modern web applications",
                },
                {
                  name: "Backend & APIs",
                  level: 90,
                  description: "RESTful and GraphQL APIs",
                },
                {
                  name: "Cloud & DevOps",
                  level: 85,
                  description: "Deployment and infrastructure",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-[var(--muted)] ml-2">
                        {skill.description}
                      </span>
                    </div>
                    <span className="text-sm font-medium gradient-text">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 relative overflow-hidden"
                    >
                      {/* Shine effect */}
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 2,
                          delay: index * 0.1 + 1,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
