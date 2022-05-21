import { Icon2, LinkedIn, Github, Dribble, Gmail } from '../icons/index'
import {
	IoLogoDribbble,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailUnreadOutline,
} from 'react-icons/io5'

type SocialType = {
	name: string
	icon: JSX.Element
	link: string
}[]

const socialData: SocialType = [
	{
		name: 'LinkedIn',
		icon: <IoLogoLinkedin />,
		link: 'https://www.linkedin.com/in/ngoni-mugumwa-302576227/',
	},
	{
		name: 'Github',
		icon: <IoLogoGithub />,
		link: 'https://github.com/Chris-Mugumwa',
	},
	{
		name: 'Dribbble',
		icon: <IoLogoDribbble />,
		link: 'https://dribbble.com/Chris_mugs',
	},
	{
		name: 'Gmail',
		icon: <IoMailUnreadOutline />,
		link: 'https://ngoni.mugumwa@gmail.com',
	},
]

const Footer = () => {
	return (
		<footer className='footer'>
			<Icon2 className='footer__icon' />
			<h4 className='footer__heading'>
				Making a difference through code, one project at a time.
			</h4>

			<div className='footer__container'>
				{socialData.map(social => (
					<a
						href={`${social.link}`}
						target='_blank'
						rel='noopener noreferrer'
						className='footer__wrapper'
						key={social.name}>
						<span className='footer__wrapper--icon'>{social.icon}</span>
					</a>
				))}
			</div>
		</footer>
	)
}

export default Footer
