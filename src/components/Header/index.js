import React from 'react'
import { FlexCentreWrapper } from '../common/styledComponent/wrapper'
import { H1 } from '../Typography'

function Header() {
	return (
		<FlexCentreWrapper borderBottom={false} height='3.5rem' bgColor='black'>
			<H1 color='white' textStyle='uppercase' fontSize='18px'>
				Rahul.Raj
			</H1>
		</FlexCentreWrapper>
	)
}

export default Header
