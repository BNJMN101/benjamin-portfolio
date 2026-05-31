import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/BNJMN101', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-akinjiyan-16a649374/', icon: Linkedin },
  { label: 'Twitter / X', href: 'https://x.com/BNJMNX999', icon: Twitter },
  { label: 'Email', href: 'mailto:benjaminxdev@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/2347025302446', icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-3 sm:items-start">
             <div className="relative flex h-12 px-5 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-white/[0.03] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
              
              {/* Ambient Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-80" />
              
              {/* Bold Typography */}
              <span className="relative z-10 text-2xl font-black uppercase tracking-widest text-primary font-sans antialiased selection:bg-transparent">
                AB
              </span>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-primary/20 to-primary/40" />
  </div>
            <p className="max-w-xs text-center text-sm text-muted-foreground sm:text-left">
              Full Stack Developer crafting fast, beautiful, and scalable web
              experiences.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Akinjiyan Benjamin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
