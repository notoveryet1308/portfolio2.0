import styled from 'styled-components'

const SkillCategoryLabel = styled.p`
  width: 100%;
  font-size: 24px;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  margin: 15px 0;
`

const SkillDisplay = styled.div`
	width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export {SkillDisplay, SkillCategoryLabel}