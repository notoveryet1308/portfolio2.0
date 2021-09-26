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

export { MovingWrapper, AbsolutePosWrapper, StickyContentWrapper }
