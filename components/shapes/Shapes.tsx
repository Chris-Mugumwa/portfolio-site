import {
	CircleGray,
	CirclePurple,
	CircleYellow,
	Square,
	Triangle,
} from '../icons/index'

export const Shapes = () => {
	return (
		<div className='shapes'>
			<CircleGray className='shapes__gray' />
			{/* <CirclePurple className='shapes__purple' /> */}
			<CirclePurple className='shapes__purple2' />
			<CircleYellow className='shapes__yellow' />
			<CircleYellow className='shapes__yellow2' />
			<Square className='shapes__square' />
			<Triangle className='shapes__triangle' />
		</div>
	)
}
