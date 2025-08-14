import { Link, NavLink, useLocation } from "react-router-dom"

export default function Header() {
	const onHome = useLocation().pathname === "/"

  return (
    <header className="flex justify-between items-center relative mb-12 md:mb-20">
			{onHome ? (
				<h1 className="text-2xl">Gerald Ramir Rivera</h1>
			) : (
				<Link to="/" className="text-2xl">Gerald Ramir Rivera</Link>
			)}
				

				
			
      <input type="checkbox" id="nav-toggle" className="hidden peer" />
    	<label htmlFor="nav-toggle" 
				className="
					text-2xl 
					md:hidden
				"
			>
				☰
			</label>
      
			<nav 
				className="
					absolute top-full right-0
					flex flex-col bg-zinc-500 opacity-80
					max-h-0 overflow-hidden
					peer-checked:max-h-64
					transition-all duration-1000 ease-in-out
					// Desktop
					md:static md:top-auto md:right-auto
					md:flex-row md:opacity-100 md:bg-transparent
					md:max-h-none
				"
			>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 md:px-0 ">Resume</a>
        <a href="https://grsrivera.github.io/" className="px-4 py-2 md:px-0 md:ml-8">Fun</a>
        <a href="mailto:gerald_ramir.rivera@tufts.edu" className="px-4 py-2 md:px-0 md:ml-8">Contact</a>
      </nav>
    </header>
  )
}