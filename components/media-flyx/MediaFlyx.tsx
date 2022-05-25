import Image from 'next/image'
import { Polygon } from '../icons/index'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

const mediaData = [
	{
		name: 'Media-Flyx',
		description:
			'A movie & tv-show web application that allows users to query a vast number of movies, tv-shows, and anime. Users can also preview videos based on the queried entertainment media and view details provided by the Movie Database Api. Built using: React.js, Sass, Redux Toolkit, and Firebase.',
		frontend: 'React.js',
		styling: 'Sass',
		state: 'Redux Toolkit',
		backend: 'Firebase',
	},
]

const MediaFlyx = () => {
	return (
		<section className='media'>
			<div className='media__image'>
				<Image
					src='/MediaFlyx.png'
					className='media__image--content'
					alt='My Dash'
					width='600'
					height='450'
				/>
			</div>
			<div className='media__details'>
				{mediaData.map(media => (
					<>
						<h1 className='media__details--name'>{media.name}</h1>
						<h3 className='media__built-with'>Built using:</h3>
						<ul className='media__list'>
							<li className='media__list--item'>
								<h5>{media.styling}</h5> <Polygon className />
							</li>
							<li className='media__list--item'>
								<h5>{media.frontend}</h5>
								<Polygon />
							</li>
							<li className='media__list--item'>
								<h5>{media.state}</h5> <Polygon />
							</li>
							<li className='media__list--item'>
								<h5>{media.backend}</h5> <Polygon />
							</li>
						</ul>
						<p className='media__details--description'>
							{media.description}
						</p>

						<div className='media__buttons'>
							<a
								href='https://media-flyx.netlify.app'
								target='_blank'
								rel='noopener noreferrer'
								className='media__buttons--button media__buttons--live'>
								<IoLink />
								<h5>Live</h5>
							</a>
							<a
								href='https://github.com/Chris-Mugumwa/media-app'
								target='_blank'
								rel='noopener noreferrer'
								className='media__buttons--button media__buttons--github'>
								<IoLogoGithub /> <h5>Github</h5>
							</a>
						</div>
					</>
				))}
			</div>
		</section>
	)
}

export default MediaFlyx
