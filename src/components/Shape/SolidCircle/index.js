import React from 'react'
import { MovingWrapper } from '../../common/styledComponent/wrapper'

function SolidCircle({ width, height, x, y, r, strokeWidth, hexColor }) {
	return (
		<MovingWrapper startPosY={2} finishPosY={-2} delay='10s'>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<circle
					cx={x}
					cy={y}
					r={r}
					stroke={hexColor}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</MovingWrapper>
	)
}

export default SolidCircle
