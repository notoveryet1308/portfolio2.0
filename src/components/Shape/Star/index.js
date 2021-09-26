import React from 'react'
import { MovingWrapper } from '../../common/styledComponent/wrapper'

function Star() {
	return (
		<MovingWrapper startPosY={7} finishPosY={-1} delay='8s'>
			<svg
				width='52'
				height='49'
				viewBox='0 0 52 49'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M26 4.8541L30.6353 19.1201L30.9721 20.1565H32.0619H47.062L34.9266 28.9734L34.045 29.614L34.3817 30.6504L39.017 44.9164L26.8817 36.0996L26 35.459L25.1183 36.0996L12.983 44.9164L17.6183 30.6504L17.955 29.614L17.0734 28.9734L4.938 20.1565H19.9381H21.0279L21.3647 19.1201L26 4.8541Z'
					stroke='#3A87D0'
					strokeWidth='3'
				/>
			</svg>
		</MovingWrapper>
	)
}

export default Star
