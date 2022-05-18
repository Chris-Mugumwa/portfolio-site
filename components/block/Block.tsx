import { UpsideDown, SideWays, Flat } from '../icons/index'

export const Block = () => {
	return (
		<section className='block'>
			<div className='block__container'>
				<SideWays className='block__component block__component--sideways' />
				<Flat className='block__component block__component--flat' />
				<UpsideDown className='block__component block__component--down' />
			</div>
			<div className='block__wrapper' />
		</section>
	)
}
