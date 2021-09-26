import React from 'react'
import { MovingWrapper } from '../../common/styledComponent/wrapper'

function Triangle() {
	return (
		<MovingWrapper startPosY={-2} finishPosY={4} delay='8s'>
			<svg
				width='69'
				height='60'
				viewBox='0 0 69 60'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M9.54285 54.5601L34.9128 10.6181L60.2828 54.5601H9.54285Z'
					stroke='#EDC73F'
					strokeWidth='10'
				/>
			</svg>
		</MovingWrapper>
	)
}

export default Triangle
