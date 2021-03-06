type MenuProps = {
	menuOpen: boolean
	toggleMenu: () => void
	navigationData: { name: string; path: string }[]
}

export const Menu = ({ menuOpen, toggleMenu, navigationData }: MenuProps) => {
	return (
		<div className={menuOpen ? 'menu  menu--open' : 'menu'}>
			<div className='menu__wrapper'></div>
			<nav className='menu__navigation'>
				<ul className='menu__list'>
					{navigationData.map(menu => (
						<li className='menu__item' key={menu.name}>
							<a
								href={`${menu.path}`}
								className='menu__link'
								onClick={toggleMenu}>
								{menu.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
