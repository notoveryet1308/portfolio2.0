import React from 'react'
import { ButtonLink } from '../../components/common/styledComponent/button'
import {
	PageWrapper,
	HomePageContent,
	BlockWrapper,
} from '../../components/common/styledComponent/wrapper'
import { H1, Paragraph, Hightlight } from '../../components/Typography'

function Home() {
	return (
		<PageWrapper>
			<HomePageContent>
				<BlockWrapper marginBottom='10px'>
					<Paragraph color='white'>
						Hello there, my name is
						<Hightlight>Rahul Raj.</Hightlight>
					</Paragraph>
					<Paragraph color='white'>I am a passionate </Paragraph>
					<H1 fontSize='28px' color='white'>
						FRONTEND ENGINEER.
					</H1>
				</BlockWrapper>
				<Paragraph color='white'>
					I love what I do. I write scalable, maintainable and resuable code.
				</Paragraph>
				<BlockWrapper marginTop='20px'>
					<ButtonLink
						to='/contact'
						color='white'
						bgColor='purpleColor'
						fontSize='16px'>
						Say hello
					</ButtonLink>
				</BlockWrapper>
			</HomePageContent>
		</PageWrapper>
	)
}

export default Home
