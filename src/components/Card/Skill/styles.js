import styled from 'styled-components'

const SkillCardImage = styled.div`
	width: 50px;
	height: 50px;
`
const SkillImage = styled.img`
	width: 100%;
	height: 100%;
`
const SkillLabel = styled.p`
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.colors.white};
`
export { SkillCardImage, SkillImage, SkillLabel }
