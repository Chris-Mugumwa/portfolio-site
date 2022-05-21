import {
	Icon2,
	Avatar,
	Figma,
	Adobe,
	Html,
	Css,
	Javascript,
	Git,
	Github,
	Tailwind,
	Sass,
	React,
	Typescript,
	Redux,
	Next,
	Jira,
	Postman,
	Firebase,
} from '../icons/index'
import {
	MdOutlineDesignServices,
	MdOutlineCode,
	MdOutlineHandyman,
} from 'react-icons/md'

const About = () => {
	return (
		<section className='about' id='about'>
			<nav className='about__navigation'>
				<Icon2 className='about__navigation--icon' />
				<h5 className='about__navigation--label'>About me</h5>
			</nav>
			<div className='about__container'>
				<div className='about__text'>
					<Avatar />
					<h1 className='about__text--introduction'>
						Hey there, I&apos;m Ngoni. Nice to meet you.
					</h1>

					<h5 className='about__text--description'>
						Since beginning my journey as a designer and developer 2 years
						ago, I&apos;ve worked on projects I&apos;m passionate about.
						I&apos;m quietly confident, naturally curious, and perpetually
						working on improving my skills one project at a time.
					</h5>
				</div>
			</div>
		</section>
	)
}

export default About
