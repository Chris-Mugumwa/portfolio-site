import { Shapes } from '../shapes/Shapes'

const Landing = () => {
	const resume = '/public/Ngonidzashe-Mugumwa-CV.pdf'

	return (
		<>
			<header className='landing'>
				<div className='landing__text'>
					<h5 className='landing__text--name'>Ngonidzashe Mugumwa</h5>
					<h2 className='landing__text--role'>Frontend Web Developer</h2>
					<p className='landing__text--description'>
						I design and develop beautiful, scalable and responsive user
						interfaces
					</p>
					<div className='landing__buttons'>
						<a className='landing__buttons--link' href='#contact'>
							<button className='landing__buttons--button landing__buttons--contact'>
								Contact Me
							</button>
						</a>
						<a
							href='/Ngonidzashe-Mugumwa-CV.pdf'
							download
							className='landing__buttons--link'>
							<button className='landing__buttons--button landing__buttons--resume'>
								My Resume
							</button>
						</a>
					</div>
				</div>
				<Shapes />
			</header>
		</>
	)
}

export default Landing
