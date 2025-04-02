import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-50 border-b border-slate-200 px-8 flex justify-between tracking-widest fixed">
      <div className="p-3 flex justify-around items-center">
        <img className="border-2 border-teal-700 rounded-full w-15 h-15 mr-3 object-cover" src="/img/LluisFoto.jpg" alt="Photo" />
        <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="p-2 cursor-pointer font-bold hover:text-teal-700">
            LLUIS ADAN
          </Link>
      </div>

      <div className="px-8 flex justify-around items-center space-x-15">
        <div className="w-20 flex justify-center items-center">
        <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="p-2 cursor-pointer font-bold hover:border-2 hover:text-teal-700 hover:rounded-2xl hover:border-slate-50 hover:border-y-teal-700 hover:text-sm">
            ABOUT
          </Link>
        </div>
        <div className="w-20 flex justify-center items-center">
          <Link 
             to="projects" 
             smooth={true} 
             duration={500} 
             className="p-2 cursor-pointer font-bold hover:text-teal-700 hover:rounded-2xl hover:border-2 hover:border-slate-50 hover:border-y-teal-700 hover:text-sm">
            PROJECTS
          </Link>
        </div>

        <div className="w-20 flex justify-center items-center">
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="p-2 cursor-pointer font-bold hover:text-teal-700 hover:rounded-2xl hover:border-2 hover:border-slate-50 hover:border-y-teal-700 hover:m-0 hover:text-sm">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  )
}
