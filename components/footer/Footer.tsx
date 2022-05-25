import { Icon2, LinkedIn, Github, Dribble, Gmail } from '../icons/index'
import {
	IoLogoDribbble,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailUnreadOutline,
	IoCallOutline,
	IoLocationOutline,
} from 'react-icons/io5'

type SocialType = {
	name: string
	icon: JSX.Element
	link: string
}[]

const Footer = () => {
	return (
		<footer className='footer'>
			<h2 className='footer__heading'>Great meeting you!</h2>

			<ul className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/ngoni-mugumwa-302576227/'
					target='_blank'
					rel='noopener noreferrer'
					className='footer__socials--link'>
					<LinkedIn className='footer__socials--icon' />
				</a>
				<a
					href='https://github.com/Chris-Mugumwa'
					target='_blank'
					rel='noopener noreferrer'
					className='footer__socials--link'>
					<Github className='footer__socials--icon' />
				</a>
				<a
					href='https://dribbble.com/Chris_mugs'
					target='_blank'
					rel='noopener noreferrer'
					className='footer__socials--link'>
					<Dribble className='footer__socials--icon' />
				</a>
			</ul>

			<div className='footer__information'>
				<ul className='footer__addresses'>
					<li className='footer__addresses--address'>
						<IoCallOutline />
						<h5>(+27) 67 025 6956</h5>
					</li>
					<li className='footer__addresses--address'>
						<IoMailUnreadOutline />
						<h5>ngoni.mugumwa@gmail.com</h5>
					</li>
					<li className='footer__addresses--address'>
						<IoLocationOutline />
						<h5>
							Selcourt, Springs <span>Johannesburg, South Africa</span>
						</h5>
					</li>
				</ul>
				<nav className='footer__navigation'></nav>
			</div>
		</footer>
	)
}

export default Footer
