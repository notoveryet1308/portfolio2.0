import React from 'react'
import ProjectCard from '../../components/Card/project'
import {
	PageWrapper,
	PageContent,
} from '../../components/common/styledComponent/wrapper'
import { useScreenSize } from '../../utils/hooks'
import projectData from './data'

function Project() {
	const { screenWidth } = useScreenSize()
	return (
		<PageWrapper>
			<PageContent
				justifyContent={screenWidth >= 600 ? 'space-between' : 'center'}
				flexDirection='row'
				mPaddingBottom='60px'
				isProject='true'>
				{projectData.map((el) => (
					<ProjectCard {...el} />
				))}
			</PageContent>
		</PageWrapper>
	)
}

export default Project
