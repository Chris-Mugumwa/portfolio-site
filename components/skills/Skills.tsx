import {
	Icon2,
	Html,
	Css,
	Sass,
	Tailwind,
	Javascript,
	React,
	Git,
	Github,
	Typescript,
	Figma,
	Redux,
	Jira,
	Firebase,
	Next,
	Postman,
} from '../icons/index'
import { Shapes } from '../shapes/Shapes'

type SkillsType = {
	name: string
	icon: JSX.Element
}[]

const skillsData: SkillsType = [
	{
		name: 'HTML',
		icon: <Html />,
	},
	{
		name: 'CSS',
		icon: <Css />,
	},
	{
		name: 'Javascript',
		icon: <Javascript />,
	},
	{
		name: 'Git',
		icon: <Git />,
	},
	{
		name: 'Sass',
		icon: <Sass />,
	},
	{
		name: 'TailwindCss',
		icon: <Tailwind />,
	},
	{
		name: 'React',
		icon: <React />,
	},
	{
		name: 'Typescript',
		icon: <Typescript />,
	},
	{
		name: 'Redux Toolkit',
		icon: <Redux />,
	},
	{
		name: 'Next.js',
		icon: <Next />,
	},
	{
		name: 'Firebase',
		icon: <Firebase />,
	},
	{
		name: 'Github',
		icon: <Github />,
	},
	{
		name: 'Jira',
		icon: <Jira />,
	},
	{
		name: 'Postman',
		icon: <Postman />,
	},
]

const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<div className='skills__wrapper' />
			<nav className='skills__navigation'>
				<Icon2 className='skills__navigation--logo' />

				<h5 className='skills__navigation--label'>Skills</h5>
			</nav>
			<div className='skills__container'>
				<h2 className='skills__heading'>
					<span className='skills__heading--gradient'>Technologies</span> I
					have worked with.
				</h2>

				<main className='skills__list'>
					{skillsData.map(skill => (
						<div className='skills__pill' key={skill.name}>
							<span className='skills__pill--icon'>{skill.icon}</span>
							<h5 className='skills__pill--name'>{skill.name}</h5>
						</div>
					))}
				</main>
				<Shapes />
			</div>
		</section>
	)
}

export default Skills
