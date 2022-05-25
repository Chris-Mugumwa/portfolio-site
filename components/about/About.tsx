import {
	Icon2,
	Avatar,
	Polygon,
	Html,
	Css,
	Javascript,
	Git,
	Github,
	Sass,
	Tailwind,
	React,
	Typescript,
	Redux,
	Firebase,
	Figma,
	Jira,
	Postman,
} from '../icons/index'

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

					<ul className='about__tech'>
						<li className='about__tech--item'>
							<Html className='about__tech--icon' />
							<h5>HTML5</h5>
						</li>
						<li className='about__tech--item'>
							<Css className='about__tech--icon' />
							<h5>CSS3</h5>
						</li>
						<li className='about__tech--item'>
							<Javascript className='about__tech--icon' />
							<h5>Javascript</h5>
						</li>
						<li className='about__tech--item'>
							<Git className='about__tech--icon' />
							<h5>Git</h5>
						</li>
						<li className='about__tech--item'>
							<Github className='about__tech--icon' />
							<h5>Github</h5>
						</li>
						<li className='about__tech--item'>
							<Sass className='about__tech--icon' />
							<h5>Sass</h5>
						</li>
						<li className='about__tech--item'>
							<Tailwind className='about__tech--icon' />
							<h5>Tailwind</h5>
						</li>
						<li className='about__tech--item'>
							<React className='about__tech--icon' />
							<h5>React</h5>
						</li>
						<li className='about__tech--item'>
							<Typescript className='about__tech--icon' />
							<h5>Typescript</h5>
						</li>
						<li className='about__tech--item'>
							<Redux className='about__tech--icon' />
							<h5>Redux Toolkit</h5>
						</li>
						<li className='about__tech--item'>
							<Firebase className='about__tech--icon' />
							<h5>Firebase</h5>
						</li>
						<li className='about__tech--item'>
							<Figma className='about__tech--icon' />
							<h5>Figma</h5>
						</li>
						<li className='about__tech--item'>
							<Jira className='about__tech--icon' />
							<h5>Jira</h5>
						</li>
						<li className='about__tech--item'>
							<Postman className='about__tech--icon' />
							<h5>Postman</h5>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default About
