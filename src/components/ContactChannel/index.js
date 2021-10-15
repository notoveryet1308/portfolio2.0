import React from 'react'
import { GithubLogo, TwitterLogo, LinkedinLogo } from 'phosphor-react'

import { CotactChannelWrapper, Channel, ChannelName } from './style'

function ContactChannel() {
	return (
		<CotactChannelWrapper>
			<Channel href='https://www.linkedin.com/in/rahul1308/' target='_blank'>
				<LinkedinLogo color='white' size='28' />
				<ChannelName>LinkedIn</ChannelName>
			</Channel>
			<Channel href='https://github.com/notoveryet1308' target='_blank'>
				<GithubLogo color='white' size='28' />
				<ChannelName>Github</ChannelName>
			</Channel>
			<Channel href='https://twitter.com/rahulraz1308' target='_blank'>
				<TwitterLogo color='white' size='28' />
				<ChannelName>Twitter</ChannelName>
			</Channel>
		</CotactChannelWrapper>
	)
}

export default ContactChannel
