import { useState, useEffect } from "react";
import { getProjects } from "../services/api.service"
import type { Project } from "../types";

export default function Project() {
  const [projects, setProjects] =useState<Project[]>([])

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
    <>
      {projects.map((project) => (
        <div key={project.id.toString()} className="w-full sm:w-auto mx-30 mt-25 flex justify-center space-x-10">
          <div className="p-2 flex flex-col items-center justify-center space-y-5">
            <div>
              <img className="border border-gray-300 rounded-xl" src={project.image} alt="Bomberman" />
            </div>
            <div className="mt-3 space-x-5 flex">
              <div>
                <div className="w-40 h-10 flex justify-center items-center">
                  <a href={project.url} target="_blank">
                    <div className="text-center p-2 hover:text-white hover:bg-teal-700 border-2 rounded-2xl border-slate-200 border-y-slate-500 hover:border-teal-700  hover:text-sm">
                      <h4>VISIT PROJECT</h4>
                    </div>
                  </a>
                </div>
              </div>  
              <div className="w-40 h-10 flex justify-center items-center">
              <a href={project.git} target="_blank">
                <div className="text-center p-2 hover:text-white hover:bg-teal-700 border-2 rounded-2xl border-slate-200 border-y-slate-500 hover:border-teal-700 hover:text-sm">
                  <h4>GITHUB</h4>
                </div>
                  </a>
              </div>

            </div>
          </div>

          <div className="max-w-120 sm:w-auto p-2 flex flex-col space-y-4">
            <div>
              <h2>{project.title}</h2>
            </div>

            <div>
              {project.description}
            </div>

            <div className="my-5 flex flex-wrap">
              {project.skills.map((skill) => (
                  <div key={`${project.id}-skill-${skill}`} className="bg-slate-300 border border-slate-300 h-10 rounded-2xl m-2 p-2">
                    {skill}
                  </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
