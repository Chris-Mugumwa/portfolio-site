import Image from 'next/image'
import { Icon } from '../icons/index'
import { Shapes } from '../shapes/Shapes'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

type ProjectsType = {
	css: string
	frontend: string
	backend: string
	state: null | string
	types: null | string
	name: string
	image: string
	link: string
	github: string
	description: string
}[]

const projectsData: ProjectsType = [
	{
		name: 'My Dash',
		image: '/MyDash.png',
		link: 'https://my-dash.netlify.app',
		github: 'https://github.com/Chris-Mugumwa/my-dash',
		description:
			'A dashboard web application I created to replace modern browser startup pages. I always wanted more information out of my browser start pages such as the time & date, weather forecast, and the daily news while also allowing me to customize browser bookmarks. So I made one!',
		css: 'Tailwind',
		frontend: 'React',
		backend: 'Firebase',
		state: null,
		types: null,
	},
	{
		name: 'Media-Flyx',
		image: '/MediaFlyx.png',
		link: 'https://media-flyx.netlify.app',
		github: 'https://github.com/Chris-Mugumwa/media-app',
		description:
			'A web application whereby movies, tv-shows, and anime can be queried for details. As a movie and anime enthusiast I decided to create an application where I discover new entertainment media without the hassle of logging onto Netflix.',
		css: 'Sass',
		frontend: 'React',
		backend: 'Firebase',
		state: 'Redux Toolkit',
		types: null,
	},
	{
		name: 'Snap-flyx',
		image: '/SnapFlyx.png',
		link: 'https://snap-flyx.netlify.app',
		github: 'https://github.com/Chris-Mugumwa/snap-flyx',
		description:
			'A photo gallery application that allows users to browse, select favourites and add their own images. I thought it would be interesting to work with files (particularly photographs) and save them to the cloud for a personalized gallery online that also allowed you to browse images online.',
		css: 'Tailwind',
		frontend: 'React',
		backend: 'Firebase',
		state: null,
		types: 'Typescript',
	},
]

const Projects = () => {
	return (
		<section className='projects' id='projects'>
			<nav className='projects__navigation'>
				<h4 className='projects__navigation--label'>Projects</h4>
			</nav>

			<main className='projects__container'>
				{projectsData.map((project, index) => (
					<div
						className={
							index % 2 === 0
								? 'projects__wrapper projects__wrapper--gray'
								: 'projects__wrapper projects__wrapper--color'
						}
						key={project.name}>
						<div
							className={
								index % 2 === 0
									? 'projects__image projects__image--visible'
									: 'projects__image projects__image--hidden'
							}>
							<img
								src={`${project.image}`}
								alt={`${project.name}`}
								className='projects__image--picture'
							/>
						</div>

						<div className='projects__details'>
							<h1 className='projects__details--heading'>
								{project.name}
							</h1>
							<h5 className='projects__details--description'>
								{project.description}
							</h5>

							<h5 className='projects__built-with'>Built using:</h5>

							<div className='projects__cover'>
								<ul className='projects__tool'>
									<li className='projects__tool--category'>
										{project.css}
									</li>
									<li className='projects__tool--category'>
										{project.frontend}
									</li>
									{project.state !== null ? (
										<li className='projects__tool--category'>
											{project.state}
										</li>
									) : null}

									{project.types !== null ? (
										<li className='projects__tool--category'>
											{project.types}
										</li>
									) : null}
									<li className='projects__tool--category'>
										{project.backend}
									</li>
								</ul>
							</div>

							<div className='projects__buttons'>
								<button className='projects__buttons--button projects__buttons--github'>
									<a
										href={`${project.github}`}
										target='_blank'
										rel='noopener noreferrer'
										className='projects__buttons--link projects__buttons--github-link'>
										<IoLogoGithub />
										<span className='projects__buttons--text-github'>
											Github
										</span>
									</a>
								</button>

								<button className='projects__buttons--button projects__buttons--live'>
									<a
										href={`${project.link}`}
										target='_blank'
										rel='noopener noreferrer'
										className='projects__buttons--link projects__buttons--live-link'>
										<IoLink className='projects__buttons--text-live' />
										<span className='projects__buttons--text-live'>
											Live Demo
										</span>
									</a>
								</button>
							</div>
						</div>
						<div
							className={
								index % 2 === 1
									? 'projects__image projects__image--visible projects__image--middle'
									: 'projects__image projects__image--hidden '
							}>
							<img
								src={`${project.image}`}
								alt={`${project.name}`}
								className='projects__image--picture'
							/>
						</div>
					</div>
				))}
			</main>

			<Shapes />
		</section>
	)
}

export default Projects
