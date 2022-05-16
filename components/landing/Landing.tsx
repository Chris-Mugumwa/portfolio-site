import { useMenu } from '../../hooks/index'

const Landing = () => {
	const { menuOpen, toggleMenu } = useMenu()

	return (
		<header className={menuOpen ? 'landing--open' : 'landing'}>
			<div className='landing__text'></div>
			<div
				className={
					menuOpen
						? 'landing__wrapper landing__wrapper--open'
						: 'landing__wrapper'
				}></div>
		</header>
	)
}

export default Landing
