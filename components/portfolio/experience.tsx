'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const timeline = [
  {
    company: 'Bimstar International School',
    role: 'Science Student & Aspiring Software Developer',
    period: '2022 — Present',
    description:
      'Pursuing a science education while building skills in software development, networking, and problem-solving. Preparing for university studies in Computer Science and related fields.',
  },
  {
    company: 'Self-Taught Programming Journey',
    role: 'Frontend & Full-Stack Developer',
    period: '2024 — Present',
    description:
      'Started with Python before expanding into JavaScript, React, Next.js, and modern web development. Built personal projects and continuously explored new technologies through hands-on learning.',
  },
  {
    company: 'Networking & Cybersecurity',
    role: 'Student Learner',
    period: '2025 — Present',
    description:
      'Studying networking fundamentals, the OSI model, TCP/IP, and cybersecurity concepts as part of a long-term goal to become an ethical hacker and security professional.',
  },
  {
    company: 'Independent Projects',
    role: 'Builder & Problem Solver',
    period: '2025 — Present',
    description:
      'Designing and developing projects that combine creativity, technology, and real-world problem solving while improving software engineering skills every day.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="My Journey So Far"
        description="The milestones, skills, and experiences that have shaped my path into software development."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-3 top-2 h-full w-px bg-border sm:left-1/2" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? 'sm:self-start sm:pr-12 sm:text-right'
                  : 'sm:self-end sm:pl-12'
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute left-1.5 top-1.5 flex h-3 w-3 ${
                  i % 2 === 0 ? 'sm:-right-1.5 sm:left-auto' : 'sm:-left-1.5'
                }`}
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>

              <div className="rounded-3xl glass p-6 transition-shadow duration-300 hover:purple-glow">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
