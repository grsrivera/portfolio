export default function HangmanProject() {
	return(
		<main className="project-page flex-grow">
			 <h1 className="text-4xl font-bold mb-10">Hangman Game</h1>
        
        <p>This project is the culmination of Harvard's 10 week Introduction to Programming with Python course. For the final assignment, students are given the freedom to choose any program they will create on their own, showcasing their skills learned through the curriculum. I decided to build the classic guessing game from scratch. In addition to the standard game mechanics, I also programmed a way to create a word bank from a database, give the user hints, and save high scores.</p>
        <p>Below is a video demo. Check out the <a href="https://github.com/grsrivera/CS50P_Final_Project">GitHub write-up</a> to read more about my process.</p>
        

        <br />
        <iframe src="https://www.youtube.com/embed/rQ5qItHykHY?si=Y-uD-AlrbUPYmiv-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full aspect-[16/11] max-w-[500px] rounded-xl mx-auto shadow-[0_0_16px_rgba(255,255,255,0.2)]"></iframe>
		</main>
	)
}