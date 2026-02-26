import { useState, useEffect } from "react"
import { getProjects } from "../services/api.service"
import type { Project } from "../types"
import { motion } from "framer-motion"
import ButtonLink from "./ButtonLink"

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects()
        setProjects(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div id="projects" className="bg-slate-950 py-20 px-4 md:px-10 border-t border-slate-800">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-3xl md:text-4xl tracking-tight">PROYECTOS</h1>
          <div className="w-32 h-px rounded-full bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"></div>
          <p className="max-w-xl mt-2 text-slate-400 text-lg md:text-xl">
            Aquí puedes ver algunos de mis proyectos y qué he trabajado en cada uno
          </p>
        </div>

        <div className="flex flex-col space-y-16 mt-12 w-full max-w-6xl">
          {projects.map((project) => (
            <motion.div
              key={project.id.toString()}
              className="flex flex-col md:flex-row w-full space-x-0 md:space-x-4 mb-6 rounded-2xl p-4 md:p-5 bg-slate-900 border border-slate-800 shadow-xl shadow-black/20 hover:border-slate-700 hover:bg-slate-900/80 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 flex justify-center"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="border border-slate-700 rounded-xl w-full max-w-2xl object-cover shadow-2xl shadow-black/30"
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                />
              </a>

              <div className="md:w-1/2 p-5 flex flex-col space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center text-center gap-2">
                    <h2 className="text-2xl font-semibold text-slate-100">{project.title}</h2>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-end mt-2 md:mt-0 select-none">
                      {project.options.map((option) => (
                        <div
                          key={`${project.id}-option-${option}`}
                          className="cursor-default h-9 rounded-xl px-3 flex items-center justify-center text-xs md:text-sm bg-slate-800 border border-slate-700 text-slate-300 hover:border-sky-300/50 hover:bg-slate-700 transition-colors"                      
                        >
                          <span className="m-1">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 h-px w-2/3 rounded-full bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"></div>                
                </div>

                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 select-none">
                  {project.skills.map((skill) => (
                    <span
                      key={`${project.id}-skill-${skill}`}
                      className="bg-slate-800 border border-slate-700 text-slate-200 h-9 rounded-xl px-3 flex items-center justify-center text-xs md:text-sm hover:border-sky-300/50 hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                  <ButtonLink href={project.url} target="_blank" rel="noopener noreferrer" variant="primary">
                    VER PROYECTO
                  </ButtonLink>

                  <ButtonLink href={project.git} target="_blank" rel="noopener noreferrer" variant="secondary">
                    GITHUB
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  )
}