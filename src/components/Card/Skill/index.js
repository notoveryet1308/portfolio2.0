import React from 'react'
import { CardWrapper } from '../../common/styledComponent/wrapper'
import { SkillCardImage, SkillImage, SkillLabel } from './styles'

function SkillCard({ img, label }) {
	return (
		<CardWrapper>
			<SkillCardImage>
				<SkillImage src={img} />
			</SkillCardImage>
			<SkillLabel>{label}</SkillLabel>
		</CardWrapper>
	)
}

export default SkillCard
