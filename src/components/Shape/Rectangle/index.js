import React from 'react'
import { MovingWrapper } from '../../common/styledComponent/wrapper'

function Rectangle() {
	return (
		<MovingWrapper startPosY={0} finishPosY={5} delay='15s'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<rect
					x='3.5'
					y='3.5'
					width='93'
					height='93'
					rx='6.5'
					stroke='#E53E3E'
					strokeWidth='7'
				/>
			</svg>
		</MovingWrapper>
	)
}

export default Rectangle
