'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Server, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

type Skill = { name: string; level: number }

const categories: {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}[] = [
  {
    title: 'Frontend',
    icon: <Code2 className="h-4 w-4" />,
    skills: [
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 95 },
      { name: 'JavaScript', level: 96 },
      { name: 'TypeScript', level: 93 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="h-4 w-4" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Django', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: <Database className="h-4 w-4" />,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 82 },
      { name: 'Supabase', level: 86 },
    ],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-4 w-4" />,
    skills: [
      { name: 'Git', level: 94 },
      { name: 'Docker', level: 84 },
      { name: 'Figma', level: 88 },
      { name: 'VS Code', level: 97 },
    ],
  },
]

function SkillBar({ name, level }: Skill) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with"
        description="A versatile toolkit refined across years of shipping production software."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={staggerItem}
            className="group rounded-3xl glass p-6 transition-shadow duration-300 hover:purple-glow"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                {cat.icon}
              </span>
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-col gap-4">
              {cat.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
