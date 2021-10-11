import React from 'react'
import { useLocation } from 'react-router-dom'
import {
	HouseLine,
	Gear,
	User,
	Envelope,
	BriefcaseMetal,
	LightbulbFilament,
} from 'phosphor-react'
import {
	StickyContentWrapper,
	FlexCentreWrapper,
} from '../common/styledComponent/wrapper'
import navigationData from './data'
import {
	NavigationContainerLarge,
	NavigationLink,
	NavigationContainerSmall,
	NavigationIconLink,
	NavigationLinkLabel,
} from './style'

const Icons = {
	HouseLine,
	Gear,
	User,
	Envelope,
	BriefcaseMetal,
	LightbulbFilament,
}

const NavigationLarge = () => {
	const location = useLocation()
	const isActive = (path) => {
		if (location.pathname === path) {
			return true
		}
		return false
	}
	return (
		<NavigationContainerLarge>
			{/* <StickyContentWrapper top='0' left='0'> */}
				<FlexCentreWrapper height='100%' bgColor='blackColor80'>
					$
					{navigationData.map((route) => (
						<NavigationLink to={route.to} active={isActive(route.to)}>
							{route.display}
						</NavigationLink>
					))}
				</FlexCentreWrapper>
			{/* </StickyContentWrapper> */}
		</NavigationContainerLarge>
	)
}

const NavigationSmall = () => {
	const location = useLocation()
	const isActive = (path) => {
		if (location.pathname === path) {
			return true
		}
		return false
	}
	return (
		<NavigationContainerSmall>
			<FlexCentreWrapper height='100%' bgColor='blackColor80'>
				$
				{navigationData.map((route) => {
					const IconComponent = Icons[route.icon]
					return (
						<NavigationIconLink to={route.to} active={isActive(route.to)}>
							<NavigationLinkLabel active={isActive(route.to)}>
								{route.display}
							</NavigationLinkLabel>
							<IconComponent className='nav-icon' size='26' />
						</NavigationIconLink>
					)
				})}
			</FlexCentreWrapper>
		</NavigationContainerSmall>
	)
}

export { NavigationLarge, NavigationSmall }
