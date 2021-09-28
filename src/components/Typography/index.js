import styled from 'styled-components'

const H1 = styled.h1`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color, theme }) =>
		color ? theme.colors[color] : theme.colors.black};
	text-transform: ${({ textStyle }) => textStyle};
	letter-spacing: 1px;
`

const Paragraph = styled.p`
	font-size: 16px;
	width: 100%;
	color: ${({ color, theme }) =>
		color ? theme.colors[color] : theme.colors.black};
	letter-spacing: 1px;
	font-family: 'Poppins', sans-serif;
`
const Hightlight = styled.span`
	padding: 0 5px;
	color: ${({ color, theme }) =>
		color ? theme.colors[color] : theme.colors.primary};
`

export { H1, Paragraph, Hightlight }
