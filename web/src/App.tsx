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

  return (
    <div className="font-sans">

      <Navbar />

      <main className="pt-18">
        <div 
          className="bg-slate-200 p-10 md:p-20 lg:p-40 text-center flex flex-col items-center bg-cover bg-center"
        >
          <h1 >Find out who I am and what I can bring to the world of web development</h1>
          <div className="w-20 flex justify-center items-center mt-14">
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-center p-2 text-2xl font-semibold border-2 rounded-2xl hover:text-white hover:bg-teal-700 border-slate-200 border-y-teal-700 hover:border-teal-700 transition-all duration-200">PROJECTS</Link>
          </div>
        </div>


        <div id="about" className="bg-slate-100 space-y-5 py-20 px-4 md:px-10">
          <div className="flex flex-col items-center space-y-6 text-center">
              <h1>HEY!!I'm Lluis Adan</h1>
              <div className="w-30 h-1 border border-teal-600 rounded-2xl bg-teal-600"></div>
              <p className="mt-2 text-center text-gray-600 text-xl">Want to know more about me?</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between mt-15 mx-auto max-w-5xl">
            <div className="w-full md:w-1/2 p-5">
              <h2 className="mb-4">From infrastructure to code</h2>
              <p className="text-gray-700">
                I'm a Full Stack Developer with experience in JavaScript (ES6) and ReactJS, combined with a solid background as a systems technician.              
              </p>
              <p className="text-gray-700 mt-4">
                Thanks to this background, I not only develop efficient applications, but I also understand the infrastructure that supports them, from servers to network configurations.
              </p>
              <p className="text-gray-700 mt-4">
                I am passionate about technology and the challenges it brings. I consider myself a resolute, proactive and constantly learning person, always exploring new tools and trends to improve my skills and provide innovative solutions.
              </p>
            </div>

            <div className="w-full md:w-1/2 p-5">
              <h2 className="mb-4">My Skills</h2>
              <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "Git", "Github", "Docker", "Tailwind CSS", "Bootstrap", "Responsive"].map((skill, index) => (
                <motion.div
                  key={skill}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.10 }}
                  className="bg-slate-300 h-10 rounded-2xl px-4 flex items-center justify-center text-sm"
                >
                  {skill}
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
        
        <Project />

        <ContactForm />
        
      </main>

      <footer className="w-full bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
          <div className="text-white flex flex-col items-center md:items-start text-center md:text-left mt-4">
            <h3>LLUIS ADAN</h3>
            <p className="text-xs text-gray-400">Full Stack Developer</p>
          </div>

          <div className="text-white mt-4">
            <h3 className="text-center">SOCIAL</h3>
            <div className="flex justify-center space-x-4 mt-1">
              <a href="https://linkedin.com/in/lluis-adan" target="_blank" rel="noopener noreferrer">
                <img className="w-8 md:w-10" src={LinkedinPhoto} alt="Lluis Adan Linkedin Profile" />
              </a>
              <a href="https://github.com/LluisAdan" target="_blank" rel="noopener noreferrer">
                <img className="w-8 md:w-10" src={GithubPhoto} alt="Lluis Adan Github Profile" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="p-2 text-white text-center text-xs mt-6 border-t border-gray-700 pt-4">
          <p>&copy; Copyright 2025. Made by <u>Lluis Adan</u></p>
        </div>
      </footer>
    </div>
  )
}

export default App