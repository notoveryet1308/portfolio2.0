import React from 'react'
import {
	ResourcePreviewWrapper,
	ResourceCover,
	ResourceDetail,
	ResourceTitle,
	ResourceDes,
} from './style'
import scopeCover from '../../../assets/article-ss/scope-cover.png'

function ResourcePreview({ url, cover, title, description }) {
	return (
		<ResourcePreviewWrapper href={url} target='_blank'>
			<ResourceCover>
				<img src={scopeCover} alt='article cover' />
			</ResourceCover>
			<ResourceDetail>
				<ResourceTitle>JavaScript: Scope and its creation</ResourceTitle>
				<ResourceDes>
					In Javascript, the usage of scope is as basic as any variable or
					function. We the Javascript developers always use scope in our program
					knowingly or unknowingly. But the question is, do we understand
					SCOPE?! In this blog...
				</ResourceDes>
			</ResourceDetail>
		</ResourcePreviewWrapper>
	)
}

export default ResourcePreview
