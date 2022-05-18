import { Icon } from '../icons/index'
import { Shapes } from '../shapes/Shapes'

const About = () => {
	return (
		<section className='about' id='about'>
			<nav className='about__navigation'>
				<Icon className='about__navigation--icon' />
				<h5 className='about__navigation--label'>About me</h5>
			</nav>

			<div className='about__text'>
				<h1 className='about__text--introduction'>
					Hey there, I&apos;m Ngoni
				</h1>

				<p className='about__text--description'>
					I took a great interest in the topics of design and front-end
					development and have dedicated my time to build out applications
					I find interesting and fun while incorporating my knowledge of
					design and frontend concepts.
				</p>
			</div>
			<Shapes />
		</section>
	)
}

export default About
