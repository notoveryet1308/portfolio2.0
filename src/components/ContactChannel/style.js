import styled from 'styled-components'

const CotactChannelWrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent};
	gap: 10px;
	flex-wrap: wrap;
`
const Channel = styled.a`
	text-decoration: none;
	padding: 7px 15px;
	background: rgba(99, 99, 206, 0.2);
	display: flex;
	column-gap: 10px;
	align-items: center;
	border-radius: 2px;
  transition: background 300ms ease-in-out;
	&:hover {
		background: rgba(99, 99, 206, 0.8);
		transition: background 300ms ease-in-out;
	}
`
const ChannelName = styled.span`
	font-size: 16px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
`
export { CotactChannelWrapper, Channel, ChannelName }
