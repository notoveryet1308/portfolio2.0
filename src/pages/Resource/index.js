import React from 'react'

import {
	PageWrapper,
	PageContent,
} from '../../components/common/styledComponent/wrapper'

import ResourcePreview from '../../components/Card/ResourcePreview'

function Resource() {
	return (
		<PageWrapper>
			<PageContent justifyContent='center'>
				<ResourcePreview url='https://frontendview.hashnode.dev/javascript-scope-and-its-creation' />
			</PageContent>
		</PageWrapper>
	)
}

export default Resource
