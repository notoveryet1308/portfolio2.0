import styled, { keyframes, css } from 'styled-components'

const updown = (startPosY, finishPosY) => keyframes`
  0% {
    transform: translateY(${startPosY}rem);
  }

  100%{
    transform: translateY(${finishPosY}rem);
  }
`

const MovingWrapper = styled.div`
	position: relative;
	animation: ${({ startPosY, finishPosY }) => updown(startPosY, finishPosY)}
		${({ delay }) => delay} ease-in-out alternate infinite;
`
const AbsolutePosWrapper = styled.div`
	position: absolute;
	top: ${({ top }) => top};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
`

const StickyContentWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: sticky;
	top: ${({ top }) => top};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
`
const PageWrapper = styled.div`
	width: 100%;
	position: relative;
	padding: 1.5rem;
	min-height: calc(100vh - 106px);
`
const FlexCentreWrapper = styled.div`
	position: relative;
	width: 100%;
	flex-wrap: wrap;
	height: ${({ height }) => height};
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: ${({ borderBottom, theme }) =>
		borderBottom && `1px solid ${theme.colors.greyColor5}`};
`
const PageContent = styled.div`
	position: relative;
	width: 100%;
	min-height: calc(100vh - 216px);
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	align-items: ${({ alignItem }) => alignItem};
	justify-content: ${({ justifyContent }) => justifyContent};
	flex-wrap: wrap;
	padding-bottom: ${({ mPaddingBottom }) => mPaddingBottom};
	@media (min-width: 600px) {
		width: 600px;
		margin: 0 auto;
		padding: 0;
	}

	${({ isProject }) => isProject && css`
	@media (min-width: 800px) {
		width: 800px;
		margin: 0 auto;
		padding: 0;
	}
	`}
`

const BlockWrapper = styled.div`
	width: 100%;
	position: relative;
	margin-top: ${({ marginTop }) => marginTop};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	& > p {
		margin-bottom: 5px;
	}
	@media (min-width: 600px) {
		/* width: unset; */
	}
`
const CardWrapper = styled.div`
	position: relative;
	height: auto;
	background-color: ${({ theme }) => theme.colors.blackColor70};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;
	padding: 20px;
`
const MarginWrapper = styled.div`
	position: relative;
	margin-bottom: ${({ mbottom }) => mbottom};
`

export {
	MovingWrapper,
	AbsolutePosWrapper,
	StickyContentWrapper,
	PageWrapper,
	FlexCentreWrapper,
	PageContent,
	BlockWrapper,
	CardWrapper,
	MarginWrapper,
}
