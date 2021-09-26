import styled from 'styled-components'

const PageBackgroundWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	overflow: hidden;
`
const PageBackgroundOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(20, 24, 33, 0.6);
`

export { PageBackgroundWrapper, PageBackgroundOverlay }
