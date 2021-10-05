import React from 'react'
import SkillCard from '../../components/Card/Skill'
import { ButtonLink } from '../../components/common/styledComponent/button'
import {
	PageWrapper,
	BlockWrapper,
	PageContent,
} from '../../components/common/styledComponent/wrapper'
import { H1, Paragraph, Hightlight } from '../../components/Typography'
import { mainSkills, tools } from './data'
import { SkillDisplay, SkillCategoryLabel } from './styles'

function Skills() {
	return (
		<PageWrapper>
			<PageContent justifyContent='center' alignItem='center' mPaddingBottom="60px">
				<SkillCategoryLabel>Main Technologies</SkillCategoryLabel>
				<SkillDisplay>
					{mainSkills.map((el) => (
						<SkillCard img={el.img} label={el.label} />
					))}
				</SkillDisplay>
				<SkillCategoryLabel>Tools</SkillCategoryLabel>
				<SkillDisplay>
					{tools.map((el) => (
						<SkillCard img={el.img} label={el.label} />
					))}
				</SkillDisplay>
			</PageContent>
		</PageWrapper>
	)
}

export default Skills
