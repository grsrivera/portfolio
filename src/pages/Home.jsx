import profilePic from "../assets/profile-pic.jpg"
import { projects } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard"
import { skills } from "../data/skills.js"
import SkillCard from "../components/SkillCard"

export default function Home() {
  {/* come back to this about rerunning on renders*/}

  const projectCardArray = projects.map(obj => 
    <ProjectCard key={obj.id} id={obj.id} title={obj.title} desc={obj.desc} href={obj.href} img={obj.img} />
  )

  const skillCardArray = skills.map(obj => 
    <SkillCard key={obj.id} id={obj.id} title={obj.title} img={obj.img} />
  )
  
  return (
    <main>
      <section className="flex flex-col md:flex-row md:gap-12 md:text-2xl md:items-center">
        <img src={profilePic} className="md:max-w-[400px]" />

        <div>
            <p className="mt-0">Former Navy pilot and public policy graduate, now studying computer science.</p>
            <p>I’m interested in building tech for the public good.</p>
        </div>
      </section>

      <section className="w-full mt-8 mb-8 md:mt-16 md:mb-16">
        <h2 className="!font-normal text-center">Projects</h2>

        <div className="md:grid md:grid-cols-2 md:gap-8">
          {projectCardArray}
        </div>
      </section>

      <section className="w-full">
        <h2 className="!font-normal text-center">Skills</h2>

        <div className="flex flex-wrap gap-8 justify-center">
          {skillCardArray}
        </div>
      
      </section>



    </main>
  )
}