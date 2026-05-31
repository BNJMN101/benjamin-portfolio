'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demo: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Pulse Analytics',
    description:
      'A dashboard concept built to explore data visualisation, charts, and modern SaaS interface design.',
    image: '/projects/saas-analytics.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Nova AI Assistant',
    description:
      'An AI chat interface concept focused on responsive layouts, modern UI design, and conversational experiences.',
    image: '/projects/ai-chat.png',
    tags: ['React', 'AI SDK', 'Node.js'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Atelier Store',
    description:
      'A modern e-commerce storefront design showcasing product discovery and clean shopping experiences.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Prism Design System',
    description:
      'A design system concept exploring reusable components and scalable UI architecture.',
    image: '/projects/design-system.png',
    tags: ['React', 'Storybook', 'TypeScript'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Vault Finance',
    description:
      'A modern finance app concept built around budgeting, analytics, and intuitive user experiences.',
    image: '/projects/fintech.png',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Forge CLI',
    description:
      'A command-line developer tool concept focused on productivity and streamlined workflows.',
    image: '/projects/devtool.png',
    tags: ['Rust', 'TypeScript', 'Docker'],
    demo: '#',
    github: '#',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-shadow duration-300 hover:purple-glow"
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-transparent transition-colors duration-300 group-hover:border-primary/40" />
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-2">
          <a
            href={project.demo}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="A selection of products I've designed and engineered end to end."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </motion.div>
    </section>
  )
}
