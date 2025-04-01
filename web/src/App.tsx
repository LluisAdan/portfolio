import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar"
import Project from "./components/Project"

function App() {

  return (
    <div className="font-mono">

      <Navbar />

      <main className="pt-20">
        <div className="bg-slate-200 p-40 text-center">
          <h1>Find out who I am and what I can bring to the world of web development</h1>
        </div>
        <div id="about" className="bg-slate-100 space-y-5 py-20">
          <div className="flex flex-col items-center space-y-6">
              <h1>HEY, I'M LLUIS ADAN</h1>
              <hr className="w-30" />
              <div className="max-w-150 mx-10">
                <p className="text-center">Want to know more about me?</p>
              </div>
          </div>
          
          <div className="space-x-5 flex justify-around mt-20 mx-10">
            <div className="w-1/2">
              <div className="m-5 p-3 space-y-4">
                <div className="mb-5">
                  <h2>From infrastructure to code</h2>
                </div>
                <p>
                  I'm a Full Stack Developer with experience in JavaScript (ES6) and ReactJS, combined with a solid background as a systems technician.              
                </p>
                <p>
                  Thanks to this background, I not only develop efficient applications, but I also understand the infrastructure that supports them, from servers to network configurations.
                </p>
                <p>
                  I am passionate about technology and the challenges it brings. I consider myself a resolute, proactive and constantly learning person, always exploring new tools and trends to improve my skills and provide innovative solutions.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="m-5 p-3 space-y-4">
                <h2>My Skills</h2>
              </div>
              <div className="max-w-120 m-5 flex flex-wrap">
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  HTML
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  CSS
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  JavaScript
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  React
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Node
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Express
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  MongoDB
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Git
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Github
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Docker
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Tailwind CSS
                </div>
                <div className="bg-gray-200 border border-gray-500 h-10 rounded-2xl m-2 p-2">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="projects" className="bg-slate-200 flex flex-col items-center py-20">
          <div className="flex flex-col items-center space-y-6">
              <h1>PROJECTS</h1>
              <hr className="w-30" />
              <div className="max-w-150 mx-10">
                <p className="text-center">Here you will find some of my personal projects and the skills learned from each one</p>
              </div>
          </div>

          <Project />

        </div>

        <ContactForm />
        
      </main>

      <footer className="w-full sm:w-auto h-50 bg-black"> 
        <h1 className="text-white">FOOTER</h1>
      </footer>
    </div>
  )
}

export default App