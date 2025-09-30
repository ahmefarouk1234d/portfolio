"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and order tracking.",
    problem:
      "Small businesses struggled with managing online sales across multiple channels.",
    solution:
      "Built a unified platform with Next.js, Firebase, and Stripe integration.",
    impact: "Increased sales by 150% and reduced operational costs by 40%.",
    tech: ["Next.js", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "2",
    title: "Task Management SaaS",
    description:
      "A collaborative task management tool with real-time updates, team collaboration, and project analytics.",
    problem: "Teams needed better visibility and collaboration on project tasks.",
    solution:
      "Developed a real-time collaborative platform with Firebase and React.",
    impact: "Used by 500+ teams, 95% user satisfaction rating.",
    tech: ["React", "TypeScript", "Firebase", "Material-UI", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "3",
    title: "Healthcare Dashboard",
    description:
      "A comprehensive healthcare dashboard for patient management, appointment scheduling, and medical records.",
    problem:
      "Healthcare providers needed a centralized system for patient data.",
    solution: "Created a HIPAA-compliant dashboard with advanced security.",
    impact: "Reduced administrative overhead by 60%, served 10,000+ patients.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "4",
    title: "Real-time Analytics Platform",
    description:
      "A real-time data analytics platform with customizable dashboards and automated reporting.",
    problem: "Businesses lacked real-time insights into their operations.",
    solution: "Built a scalable analytics platform with WebSocket integration.",
    impact: "Processing 1M+ events daily, 99.9% uptime.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "5",
    title: "Social Media Scheduler",
    description:
      "A social media management tool for scheduling, publishing, and analyzing content across platforms.",
    problem: "Content creators spent hours manually posting across platforms.",
    solution: "Automated multi-platform scheduling with analytics.",
    impact: "Saved users 20+ hours weekly, 5,000+ active users.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Bull Queue", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "6",
    title: "Learning Management System",
    description:
      "An interactive LMS with video streaming, quizzes, progress tracking, and certificate generation.",
    problem: "Educational institutions needed online learning infrastructure.",
    solution:
      "Built a comprehensive LMS with video hosting and assessment tools.",
    impact: "10,000+ students enrolled, 85% course completion rate.",
    tech: ["Next.js", "TypeScript", "Firebase", "Cloudflare", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export default function ProjectsPage() {
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto"
          >
            Transforming ideas into impactful digital solutions. Here are some of
            my recent projects that deliver real business value.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="h-full flex flex-col group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  {/* Decorative gradient dot */}
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                </div>
                
                <p className="text-[var(--muted)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem → Solution → Impact */}
                <div className="space-y-3 mb-6">
                  <div className="pl-3 border-l-2 border-red-500/30">
                    <span className="font-semibold text-sm text-red-600 dark:text-red-400">
                      Problem
                    </span>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      {project.problem}
                    </p>
                  </div>
                  <div className="pl-3 border-l-2 border-cyan-500/30">
                    <span className="font-semibold text-sm text-cyan-600 dark:text-cyan-400">
                      Solution
                    </span>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      {project.solution}
                    </p>
                  </div>
                  <div className="pl-3 border-l-2 border-green-500/30">
                    <span className="font-semibold text-sm text-green-600 dark:text-green-400">
                      Impact
                    </span>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" className="w-full">
                      Live Demo
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
