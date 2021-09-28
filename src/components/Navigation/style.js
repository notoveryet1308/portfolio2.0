import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavigationContainerLarge = styled.nav`
	position: relative;
	width: 100%;
	height: 35px;
	display: none;
	@media (min-width: 600px) {
		display: block;
	}
`
const NavigationLink = styled(NavLink)`
	position: relative;
	padding: 4.5px 10px;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	color: ${({ active, theme }) =>
		active ? theme.colors.white : theme.colors.greyColor70};
	text-decoration: none;
	background-color: ${({ active, theme }) => active && theme.colors.primary};
	&:hover {
		color: ${({ theme, active }) => !active && theme.colors.primary};
	}
`
const NavigationContainerSmall = styled.nav`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	display: block;
	@media (min-width: 600px) {
		display: none;
	}
`
const NavigationIconLink = styled(NavLink)`
	position: relative;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 0.8rem;
	.nav-icon {
		color: ${({ active, theme }) =>
			active ? theme.colors.primary : theme.colors.greyColor70};
		&:hover {
			color: ${({ active, theme }) => !active && theme.colors.primary};
		}
	}
`
const NavigationLinkLabel = styled.span`
	position: absolute;
	top: -1.8rem;
	padding: 4.5px 10px;
	display: ${({ active }) => (active ? 'inline' : 'none')};
	text-transform: uppercase;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	letter-spacing: 2px;
`

export {
	NavigationContainerLarge,
	NavigationContainerSmall,
	NavigationLink,
	NavigationLinkLabel,
	NavigationIconLink,
}
