import styled, { keyframes } from 'styled-components'

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
	padding: 0 1.5rem;
	min-height: calc(100vh - 106px);
`
const FlexCentreWrapper = styled.div`
	position: relative;
	width: 100%;
	height: ${({ height }) => height};
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: ${({ borderBottom, theme }) =>
		borderBottom && `1px solid ${theme.colors.greyColor5}`};
`
const HomePageContent = styled.div`
	position: relative;
	width: 100%;
	min-height: calc(100vh - 80px - 106px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: 600px) {
		width: 600px;
		margin: 0 auto;
	}
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

export {
	MovingWrapper,
	AbsolutePosWrapper,
	StickyContentWrapper,
	PageWrapper,
	FlexCentreWrapper,
	HomePageContent,
	BlockWrapper,
}
