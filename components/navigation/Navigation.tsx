import { Icon, Icon2 } from '../icons/index'
import { useMenu } from '../../hooks'
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi'
import { Menu } from '../menu/Menu'

const navigationData = [
	{
		name: 'Projects',
		path: '#projects',
	},
	{
		name: 'My skills',
		path: '#skills',
	},
	{
		name: 'About me',
		path: '#about',
	},
	{
		name: 'Contact',
		path: '#contact',
	},
]

export const Navigation = () => {
	const { menuOpen, toggleMenu } = useMenu()

	return (
		<nav className='navigation'>
			<div className='navigation__logo'>
				{menuOpen && <Icon2 className='navigation__logo--icon' />}
				{!menuOpen && <Icon className='navigation__logo--icon' />}
			</div>

			<div className='navigation__wrapper'>
				<div
					className={
						menuOpen
							? 'navigation__menu navigation__menu--open'
							: 'navigation__menu'
					}
					onClick={toggleMenu}>
					{menuOpen && <HiOutlineX className='navigation__menu--icon' />}
					{!menuOpen && (
						<HiOutlineMenuAlt1 className='navigation__menu--icon' />
					)}
				</div>

				<ul className='navigation__list'>
					{navigationData.map(navigation => (
						<li key={navigation.name} className='navigation__item'>
							<a
								href={`${navigation.path}`}
								className='navigation__link'>
								{navigation.name}
							</a>
						</li>
					))}
				</ul>
			</div>

			<Menu
				menuOpen={menuOpen}
				toggleMenu={toggleMenu}
				navigationData={navigationData}
			/>
		</nav>
	)
}
