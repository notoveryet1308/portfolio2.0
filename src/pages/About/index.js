import React from 'react'
import {
	PageContent,
	PageWrapper,
	MarginWrapper,
} from '../../components/common/styledComponent/wrapper'
import ContactChannel from '../../components/ContactChannel'
import { Paragraph, Hightlight } from '../../components/Typography'

function About() {
	return (
		<PageWrapper>
			<PageContent justifyContent='center' flexDirection='column'>
				<MarginWrapper mbottom='10px'>
					<Paragraph color='white'>Hello there,</Paragraph>
					<Paragraph color='white'>
						My name is
						<Hightlight>Rahul Raj</Hightlight>. I am self taught FRONTEND
						ENGINEER.
					</Paragraph>
				</MarginWrapper>
				<MarginWrapper mbottom='10px'>
					<Paragraph color='white'>
						I mostly work on frontned related technologies like Javascript, Css
						and Reactjs but i can work on backend stuffs like creating APIs,
						MongoDB, JWT and etc.
					</Paragraph>
				</MarginWrapper>
				<MarginWrapper mbottom='10px'>
					<Paragraph color='white'>
						Beside coding I mostly watch Anime, sci-fi action and superhero
						related shows/movies.
					</Paragraph>
				</MarginWrapper>
				<MarginWrapper mbottom='40px'>
					<Paragraph color='white'>Thank you visiting.</Paragraph>
				</MarginWrapper>
				<ContactChannel />
			</PageContent>
		</PageWrapper>
	)
}

export default About
