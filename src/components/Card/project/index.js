import React from 'react'
import {
	ProjectCardWrapper,
	ProjectImage,
	ProjectDetail,
	ProjectTitle,
	ProjectDescription,
	Techstack,
	ProjectCTA,
	ProjectCTAWrapper,
} from './style'

import { FlexCentreWrapper } from '../../common/styledComponent/wrapper'

function ProjectCard({
	imgUrl,
	name,
	description,
	techStack = [],
	liveUrl,
	codeUrl,
}) {
	return (
		<ProjectCardWrapper>
			<ProjectImage>
				<img src={imgUrl} alt={name} lazyLoad />
			</ProjectImage>
			<ProjectDetail>
				<ProjectTitle>{name}</ProjectTitle>
				<ProjectDescription>{description}</ProjectDescription>
				<FlexCentreWrapper>
					{techStack.map((el) => (
						<Techstack>{el}</Techstack>
					))}
				</FlexCentreWrapper>
				<ProjectCTAWrapper>
					<ProjectCTA target='_blank' href={liveUrl}>
						Live
					</ProjectCTA>
					<ProjectCTA target='_blank' href={codeUrl}>
						Code
					</ProjectCTA>
				</ProjectCTAWrapper>
			</ProjectDetail>
		</ProjectCardWrapper>
	)
}

export default ProjectCard
