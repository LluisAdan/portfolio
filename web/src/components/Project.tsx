import { useState, useEffect } from "react"
import { getProjects } from "../services/api.service"
import type { Project } from "../types"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Project() {
  const [projects, setProjects] =useState<Project[]>([])
    const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) 

  useEffect(() => {
    const fetchProjects = async() => {
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
    <div id="projects" className="bg-slate-200 flex flex-col items-center py-20 px-4 md:px-10">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1>PROJECTS</h1>
        <div className="w-30 h-1 border border-teal-600 rounded-2xl bg-teal-600"></div>
        <p className="max-w-xl mt-2 text-gray-600 text-xl">Here you will find some of my personal projects and the skills learned from each one</p>
      </div>

      <div className="flex flex-col space-y-24 mt-15 w-full max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.id.toString()}
            className="flex flex-col md:flex-row w-full space-x-0 md:space-x-2 mb-12 rounded-2xl p-4"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <a href={project.url} target="_blank" rel="noopener noreferrer" className="md:w-1/2 flex justify-center">
              <motion.img
              src={project.image}
              alt={project.title}
              className="border border-slate-200 rounded-xl w-full max-w-2xl object-cover shadow-2xl shadow-slate-400"
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
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-end mt-2 md:mt-0">
                    {project.options.map((option) => (
                      <div key={`${project.id}-option-${option}`} className="h-10 rounded-2xl px-4 flex items-center justify-center text-sm">
                        <span className="m-1">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-teal-600 rounded-2xl bg-teal-600"></div>

              </div>


              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={`${project.id}-skill-${skill}`} className="bg-slate-300 border border-slate-300 h-10 rounded-2xl px-4 flex items-center justify-center text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href={project.url} target="_blank" className="text-center p-2 text-sm font-semibold border-2 rounded-2xl hover:text-white hover:bg-teal-700 border-slate-200 border-y-teal-700 hover:border-teal-700 transition-all duration-200">
                  VISIT PROJECT
                </a>
                <a href={project.git} target="_blank" className="text-center p-2 text-sm font-semibold border-2 rounded-2xl hover:text-white hover:bg-teal-700 border-slate-200 border-y-teal-700 hover:border-teal-700 transition-all duration-200">
                  GITHUB
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
