export default function SkillCard(props) {
	return(
		<div className="flex flex-col justify-center items-center">
			<img src={props.img} className="h-16 w-16 object-contain" />
			<p>{props.title}</p>
		</div>
			
	)
}