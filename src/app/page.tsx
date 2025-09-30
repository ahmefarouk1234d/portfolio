"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { PersonSchema, CreativeWorkSchema } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <PersonSchema />
      <CreativeWorkSchema />
      <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-mesh)' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 dark:border-cyan-400/20 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  👋 Available for new opportunities
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I&apos;m{" "}
                <span className="gradient-text">
                  Ahmed Farouk
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--muted)] mb-6">
                Full-Stack Developer
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[var(--muted)] mb-8 max-w-xl leading-relaxed"
              >
                I craft exceptional web experiences with TypeScript, Next.js, and
                Firebase. Turning complex problems into elegant, scalable solutions
                that drive real business results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button size="lg">Hire Me</Button>
                </Link>
                <Link href="/projects">
                  <Button variant="secondary" size="lg">
                    View Projects
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative perspective-1000"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Gradient orb background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full blur-3xl opacity-20"
                ></motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 dark:border-cyan-400/20"
                >
                  <Image
                    src="/hero/hero-landing-1920.jpg"
                    alt="Ahmed Farouk"
                    width={500}
                    height={500}
                    priority
                    placeholder="blur"
                    blurDataURL="/hero/hero-blur-24.jpg"
                    className="object-cover w-full h-full"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative bg-white dark:bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Years Experience", delay: 0 },
              { value: "50+", label: "Projects Completed", delay: 0.1 },
              { value: "30+", label: "Happy Clients", delay: 0.2 },
              { value: "15+", label: "Certifications", delay: 0.3 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold gradient-text mb-2 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-violet-50 to-pink-50 dark:from-cyan-950/20 dark:via-violet-950/20 dark:to-pink-950/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[var(--muted)] mb-8 leading-relaxed"
            >
              Let&apos;s collaborate and bring your vision to life with cutting-edge
              technology and best practices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
