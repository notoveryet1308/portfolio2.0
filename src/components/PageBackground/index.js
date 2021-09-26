import React from 'react'
import {
	AbsolutePosWrapper,
	StickyContentWrapper,
} from '../common/styledComponent/wrapper'
import Rectangle from '../Shape/Rectangle'
import SolidCircle from '../Shape/SolidCircle'
import Star from '../Shape/Star'
import Triangle from '../Shape/Triangle'

import { PageBackgroundOverlay, PageBackgroundWrapper } from './style'

function PageBackground() {
	return (
		<PageBackgroundWrapper bgColor='black'>
			<StickyContentWrapper top='0' left='0'>
				<AbsolutePosWrapper top='60%' right='-8rem'>
					<SolidCircle
						width={200}
						height={200}
						x={100}
						y={100}
						r={50}
						strokeWidth={40}
						hexColor='#08bd80'
					/>
				</AbsolutePosWrapper>
				<AbsolutePosWrapper top='2%' right='5rem'>
					<Rectangle />
				</AbsolutePosWrapper>
				<AbsolutePosWrapper top='10%' left='3rem'>
					<Star />
				</AbsolutePosWrapper>
				<AbsolutePosWrapper top='70%' left='1rem'>
					<SolidCircle
						width={150}
						height={150}
						x={100}
						y={100}
						r={40}
						strokeWidth={10}
						hexColor='#141821'
					/>
				</AbsolutePosWrapper>
				<AbsolutePosWrapper top='60%' left='50%'>
					<Triangle />
				</AbsolutePosWrapper>
				<PageBackgroundOverlay />
			</StickyContentWrapper>
		</PageBackgroundWrapper>
	)
}

export default PageBackground
