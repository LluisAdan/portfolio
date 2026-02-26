import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import LinkedinPhoto from './assets/logos/linkedin.png'
import GithubPhoto from './assets/logos/github.png'
import { Link } from 'react-scroll'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


function App() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) 

  const btnPrimary = "cursor-pointer select-none inline-flex items-center justify-center px-6 py-2.5 text-lg md:text-xl font-semibold rounded-2xl border border-sky-300/30 bg-slate-900/60 text-slate-100 hover:bg-sky-300/10 hover:border-sky-300/50 hover:text-white transition-all duration-200 shadow-lg shadow-sky-300/10 backdrop-blur-sm"

  return (
  <div className="font-sans bg-slate-950 text-slate-100 min-h-screen">

    <Navbar />

    <main className="pt-18">
      <div
        className="relative bg-cover bg-center p-10 md:p-20 lg:p-40 text-center flex flex-col items-center overflow-hidden"
        style={{ backgroundImage: "url('/img/Fondo_porfolio.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 max-w-4xl leading-tight tracking-tight"
          > 
            Desarrollador Full Stack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="relative z-10 mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed"
            >
            Construyo aplicaciones web completas con React y Node. APIs REST, autenticación, base de datos y despliegue.
          </motion.p>

          <motion.div
            className="relative z-10 flex justify-center items-center mt-12 md:mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={btnPrimary}
            >
            VER PROYECTOS
            </Link>
          </motion.div>
        </div>

        <div 
          id="about" 
          className="bg-slate-900 space-y-5 py-20 px-4 md:px-10 border-t border-slate-800"
        >
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              ref={ref}
              className="flex flex-col items-center space-y-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl tracking-tight text-slate-100">
                Soy Lluís Adán
              </h1>
              <div className="w-32 h-px rounded-full bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"></div>
              <p className="mt-2 text-center text-slate-400 text-lg md:text-xl">¿Quieres saber más sobre mí?</p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mt-12 mx-auto max-w-6xl">
              <motion.div
                className="w-full md:w-1/2 p-4 md:p-5 max-w-prose"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-slate-100 tracking-tight">De sistemas a desarrollo</h2>
                
                <p className="text-slate-300 leading-relaxed">
                  Vengo de sistemas e infraestructura y he dado el salto a desarrollo web. Me gusta construir aplicaciones mantenibles, con buen UX y backend sólido: APIs, autenticación, datos y despliegue.                  
                </p>

                <ul className="mt-6 space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/80 shrink-0"></span>
                    <span>
                      <strong className="text-slate-100 font-semibold">Frontend:</strong> React + TypeScript, componentes, formularios y responsive.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/80 shrink-0"></span>
                    <span>
                      <strong className="text-slate-100 font-semibold">Backend:</strong> Node/Express, APIs REST, CRUD, autenticación y manejo de errores.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/80 shrink-0"></span>
                    <span>
                      <strong className="text-slate-100 font-semibold">Despliegue y herramientas:</strong> Git, Docker y despliegue de proyectos reales.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <div className="w-full md:w-1/2 p-4 md:p-5">
                <h2 className="mb-4 text-slate-100 tracking-tight">Tecnologías</h2>
                <div className="flex flex-wrap gap-2.5 select-none">
                {["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "Git", "Github", "Docker", "Tailwind CSS", "Bootstrap", "Responsive"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.10 }}
                    className="cursor-default bg-slate-800 border border-slate-700 text-slate-200 h-10 rounded-xl px-4 flex items-center justify-center text-sm hover:border-sky-300/50 hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Project />
      <ContactForm />
    </main>

    <footer className="w-full bg-slate-950 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 gap-4">
        <div className="text-slate-100 flex flex-col items-center md:items-start text-center md:text-left mt-4">
          <h3>Lluís Adán</h3>
          <p className="text-xs text-slate-400">Desarrollador Full Stack</p>
        </div>

        <div className="text-slate-100 mt-4">
          <h3 className="text-center">REDES</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://linkedin.com/in/lluis-adan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-300/40 transition-colors duration-200"
            >
              <img
                className="w-8 md:w-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
                src={LinkedinPhoto}
                alt="Lluis Adan Linkedin Profile"
              />
            </a>

            <a
              href="https://github.com/LluisAdan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-300/40 transition-colors duration-200"
            >
              <img
                className="w-8 md:w-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
                src={GithubPhoto}
                alt="Lluís Adán Github Profile"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-slate-300 text-center text-xs border-t border-slate-800">
        <p>&copy; Copyright 2026. Creado por <u>Lluís Adán</u></p>
      </div>
    </footer>
  </div>
  )
}

export default App