import Image from 'next/image'
import { Circle } from '../icons/index'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

const snapData = [
	{
		name: 'Snap-Flyx',
		description:
			'Snap Flyx is a web application that allows users to browse and upload images from their local machine onto a cloud storage backend provided and configured by firebase. Users can query images by their topic select their favorites (which are then saved in a separate ‘Favorites page), as well as upload images from their own local machine.',
		frontend: 'React.js',
		styling: 'TailwindCss',
		type: 'Typescript',
		backend: 'Firebase',
	},
]

const SnapFlyx = () => {
	return (
		<section className='snap'>
			<div className='snap__details'>
				{snapData.map(snap => (
					<>
						<h1 className='snap__details--name'>{snap.name}</h1>
						<h3 className='snap__built-with'>Built using:</h3>
						<ul className='snap__list'>
							<li className='snap__list--item'>
								<Circle className /> <h5>{snap.styling}</h5>
							</li>
							<li className='snap__list--item'>
								<Circle /> <h5>{snap.frontend}</h5>
							</li>
							<li className='snap__list--item'>
								<Circle /> <h5>{snap.type}</h5>
							</li>
							<li className='snap__list--item'>
								<Circle /> <h5>{snap.backend}</h5>
							</li>
						</ul>
						<p className='snap__details--description'>
							{snap.description}
						</p>

						<div className='snap__buttons'>
							<a
								href='https://snap-flyx.netlify.app'
								target='_blank'
								rel='noopener noreferrer'
								className='snap__buttons--button snap__buttons--live'>
								<IoLink />
								<h5>Live</h5>
							</a>
							<a
								href='https://github.com/Chris-Mugumwa/snap-flyx'
								target='_blank'
								rel='noopener noreferrer'
								className='snap__buttons--button snap__buttons--github'>
								<IoLogoGithub /> <h5>Github</h5>
							</a>
						</div>
					</>
				))}
			</div>
			<div className='snap__image'>
				<Image
					src='/SnapFlyx.png'
					className='snap__image--content'
					alt='My Dash'
					width='600'
					height='450'
				/>
			</div>
		</section>
	)
}

export default SnapFlyx
