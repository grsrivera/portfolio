export default function TownHallProject() {
	return(
			<main className="project-page flex-grow">
			
        <h1 className="text-4xl font-bold mb-10">Electronic Town Hall</h1>
        
        <p>This is a prototype of an idea that a fellow graduate of the Harvard Kennedy School of Government and I are currently validating. We're addressing the challenge of limited accessibility to public officials faced by everyday citizens. Essentially, it's a message board that governments can embed into their existing websites. Our goal is to give residents a stronger voice in their communities.</p>
        <p>I'm the tech lead for the project and built this prototype myself. We've met with several public officials in the Greater Boston area and are continuing to validate the concept with offices that are open to collaboration.</p>
        <p>The prototype is populated with dummy threads created by web scraping articles from Alaska’s News Source and using a large language model to simulate conversations around those topics. The front page features AI-generated summaries of the most discussed issues among Alaska residents. Users can also create new threads and post responses (simulating being logged in as me).</p>
        <p><a href="https://grsrivera.github.io/town-hall/sub-pages/index.html">Check out the demo here.</a></p>
        <p className="italic"><span className="font-bold">Note:</span> The backend is hosted on a free <a href="https://render.com/">Render</a> account, which may go to sleep after periods of inactivity. If the dummy threads don’t load right away, give it a moment and refresh the page — Render just needs to wake up.</p>
			</main>
	)
}