import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styled(Link)`
	position: relative;
	padding: 10px 15px;
	text-decoration: none;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	color: ${({ color, theme }) => theme.colors[color]};
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins', sans-serif;
`
export { ButtonLink }
