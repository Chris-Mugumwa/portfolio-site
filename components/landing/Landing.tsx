import { useMenu } from '../../hooks/index'
import { Shapes } from '../shapes/Shapes'
import { Ghost } from '../icons/index'

const Landing = () => {
	const { menuOpen, toggleMenu } = useMenu()

	return (
		<header className='landing'>
			<div className='landing__text'>
				<h5 className='landing__text--name'>Ngonidzashe Mugumwa</h5>
				<h2 className='landing__text--role'>Frontend Web Developer</h2>
				<p className='landing__text--description'>
					I design and develop beautiful, scalable and responsive user
					interfaces
				</p>
				<div className='landing__buttons'>
					<button className='landing__buttons--button landing__buttons--contact'>
						Contact Me
					</button>
					<button className='landing__buttons--button landing__buttons--resume'>
						My Resume
					</button>
				</div>
			</div>
			<Ghost className='landing__ghost' />
			<Shapes />
		</header>
	)
}

export default Landing
