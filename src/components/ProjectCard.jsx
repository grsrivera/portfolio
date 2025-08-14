import { Link } from "react-router-dom"

export default function ProjectCard(props) {
  return (
		<>
		<Link to={props.href} className="block mb-16 md:my-0">
        <img src={props.img} alt="" />
					<div>
						<h3 className="text-lg my-2 font-bold">{props.title}</h3>
						<p className="text-base !my-0">{props.desc}</p>
					</div>
      	</Link>	
		</>
	)
}