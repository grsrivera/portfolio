export default function GeotaggersProject() {
	return(
		<main className="project-page">
			<h1 className="text-4xl font-bold mb-10">Geotagger for Fuji Camera</h1>
			
			<p>I developed a geotagger for my Fuji X100T camera to add GPS location data to photos. Since the camera lacks a built-in GPS module, I created an external device using a Raspberry Pi. Fuji offers a smartphone app for geotagging, but it's notoriously buggy — my goal was to build a more reliable, standalone alternative.</p>
			<p>I created two design versions: the first takes a hardware-oriented approach; the second focuses more on software automation and timestamp syncing. You can check out short video demos below. If you'd like to read more about the process, check out the write ups on GitHub for <a href="https://github.com/grsrivera/Geotagger-for-Camera-with-Raspberry-Pi?tab=readme-ov-file">Version 1</a> and <a href="https://github.com/grsrivera/Geotagger-for-Camera-with-Raspberry-Pi-Version-2">Version 2</a>.</p>
			<br />
			<p>Shout-out to Mom and my brother, Chris, for filming.</p>

			<br />
			<iframe src="https://www.youtube.com/embed/qm3pzAlzksI?si=tf7qS2trwmhFts3s" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full aspect-[16/11] max-w-[500px] rounded-xl mx-auto shadow-[0_0_16px_rgba(255,255,255,0.2)]"></iframe>
			<br />
			<br />
			<iframe src="https://www.youtube.com/embed/sT2KrxCJu0k?si=WRmwQ9NUp12wGTai" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full aspect-[16/11] max-w-[500px] rounded-xl mx-auto shadow-[0_0_16px_rgba(255,255,255,0.2)]"></iframe>
		</main>
	)
}