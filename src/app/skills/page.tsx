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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and performant
            web applications from frontend to backend.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card hover={false}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Core Competencies
            </h3>
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
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    />
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
