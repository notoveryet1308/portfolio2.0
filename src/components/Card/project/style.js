import styled from 'styled-components'

const linearGradientValue = '180deg, #08bd8160, #ffffff10'

const ProjectCardWrapper = styled.div`
	position: relative;
	width: 350px;
	margin-bottom: 20px;
	@media (min-width: 600px) {
		width: 280px;
	}
	@media (min-width: 800px) {
		width: 380px;
	}
`
const ProjectImage = styled.div`
	position: relative;
	width: 100%;

	background-position: top;
	background-size: cover;
	img {
		width: 100%;
		height: auto;
	}

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(${linearGradientValue});
	}
`
const ProjectDetail = styled.div`
	width: 100%;
	padding: 10px;
	background-color: rgba(45, 48, 57, 0.92);
	border: 1px solid #08bd80;
	border-top: none;
`
const ProjectTitle = styled.p`
	font-size: 20px;
	font-family: 'Poppins';
	color: white;
	margin-bottom: 5px;
`
const ProjectDescription = styled.p`
	font-size: 14px;
	color: #929292;
	font-family: 'Poppins';
	margin-bottom: 10px;
`
const Techstack = styled.span`
	font-size: 14px;
	color: #fff;
	font-family: 'Poppins';
	border: 1.5px solid #1d6653;
	padding: 2px 5px;
	border-radius: 15px;
	margin: 2px;
`
const ProjectCTAWrapper = styled.div`
	width: 100%;
	display: flex;
	column-gap: 10px;
	margin: 10px 0;
`

const ProjectCTA = styled.a`
	text-transform: uppercase;
	letter-spacing:1px;
	width: 100%;
	text-decoration: none;
	color: #fff;
	font-family: 'Poppins';
	font-size: 16px;
	text-align: center;
	transition: all 300ms ease-in-out;
	background: #6363ce;
	border: 1px solid #6363ce;
	padding: 5px 20px;
	&:hover {
		background: rgba(99, 99, 206, 0.48);
		transition: all 300ms ease-in-out;
	}
`

export {
	ProjectCardWrapper,
	ProjectImage,
	ProjectDetail,
	ProjectTitle,
	ProjectDescription,
	Techstack,
	ProjectCTA,
	ProjectCTAWrapper,
}
