import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-950 via-indigo-950 to-black text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-80px] top-64 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-400">
          SFWE 405
        </p>

        <h1 className="mb-4 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
          Renae Weiss Portfolio
        </h1>

        <p className="mb-6 max-w-2xl text-lg leading-10 text-slate-300">
          Software Engineering student portfolio featuring class projects,
          backend development, and software design work.
        </p>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-0 text-center"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-2xl backdrop-blur">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">
            Software Engineering Student
          </p>

          <h2 className="mb-4 text-4xl font-bold">About Me</h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            I am a Software Engineering student with experience in backend
            development, REST APIs, software architecture, and full-stack class
            projects. This portfolio highlights some of the work I have
            completed in SFWE courses, including web development, Java
            applications, and software design.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-200">
              Java
            </span>
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              Spring Boot
            </span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              REST APIs
            </span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              Full-Stack
            </span>
            <span className="rounded-full border border-slate-400/30 bg-slate-500/10 px-4 py-2 text-sm text-slate-200">
              Software Design
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-3 text-slate-400">
            A few projects that show my coursework and development experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          <Card className="h-full border-white/10 bg-slate-900/60 text-white backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
            <CardHeader>
              <CardTitle>Gaming Platform API</CardTitle>
              <CardDescription className="text-slate-400">
                Spring Boot REST API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-slate-300">
                Backend system built with Spring Boot, JPA, and layered
                architecture for managing games, users, and platform data.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full border-white/10 bg-slate-900/60 text-white backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <CardHeader>
              <CardTitle>RabbitMQ Messaging App</CardTitle>
              <CardDescription className="text-slate-400">
                Java + Messaging
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-slate-300">
                Messaging-based application using RabbitMQ, REST endpoints,
                validation, and database storage.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full border-white/10 bg-slate-900/60 text-white backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <CardHeader>
              <CardTitle>UASAMS Scholarship System</CardTitle>
              <CardDescription className="text-slate-400">
                Full-Stack Class Project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-slate-300">
                Scholarship matching system with student workflows, filtering,
                validation, and software engineering documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        Built with Next.js, Tailwind CSS, and shadcn/ui
      </footer>
    </main>
  )
}