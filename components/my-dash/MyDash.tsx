import Image from 'next/image'
import { Circle } from '../icons/index'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

const dashboardData = [
	{
		name: 'My Dash',
		description:
			'My-Dash, a front end web project I built as an alternative to browser startup pages. This web application features Create, Read, Update and Delete functionalities. My Dash is fully responsive and features a note taking, weather forecast (queryable), news feed, and webpage bookmarking capabilities.',
		frontend: 'React.js',
		styling: 'TailwindCss',
		backend: 'Firebase',
	},
]

const MyDash = () => {
	return (
		<section className='dashboard' id='projects'>
			<div className='dashboard__details'>
				{dashboardData.map(dashboard => (
					<>
						<h1 className='dashboard__details--name'>{dashboard.name}</h1>
						<h3 className='dashboard__built-with'>Built using:</h3>
						<ul className='dashboard__list'>
							<li className='dashboard__list--item'>
								<Circle className /> <h5>{dashboard.styling}</h5>
							</li>
							<li className='dashboard__list--item'>
								<Circle /> <h5>{dashboard.frontend}</h5>
							</li>
							<li className='dashboard__list--item'>
								<Circle /> <h5>{dashboard.backend}</h5>
							</li>
						</ul>
						<p className='dashboard__details--description'>
							{dashboard.description}
						</p>

						<div className='dashboard__buttons'>
							<a
								href='https://my-dash.netlify.app'
								target='_blank'
								rel='noopener noreferrer'
								className='dashboard__buttons--button dashboard__buttons--live'>
								<IoLink />
								<h5>Live</h5>
							</a>
							<a
								href='https://github.com/Chris-Mugumwa/my-dash'
								target='_blank'
								rel='noopener noreferrer'
								className='dashboard__buttons--button dashboard__buttons--github'>
								<IoLogoGithub /> <h5>Github</h5>
							</a>
						</div>
					</>
				))}
			</div>
			<div className='dashboard__image'>
				<Image
					src='/MyDash.png'
					className='dashboard__image--content'
					alt='My Dash'
					width='600'
					height='450'
				/>
			</div>
		</section>
	)
}

export default MyDash
