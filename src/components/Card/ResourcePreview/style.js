import styled from 'styled-components'

const ResourcePreviewWrapper = styled.a`
	position: relative;
	text-decoration: none;
	width: 100%;
	max-width: 300px;
`

const ResourceCover = styled.div`
	width: 100%;
	position: relative;

	img {
		width: 100%;
		height: auto;
	}
`
const ResourceDetail = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	font-family: 'Poppins', sans-serif;
  padding: 10px;
  background-color:rgba(45, 48, 57, 0.92);
`
const ResourceTitle = styled.p`
	font-size: 18px;
	color: white;
  margin-bottom: 10px;
`
const ResourceDes = styled.p`
	font-size: 14px;
	color: #929292;
`

export {
	ResourcePreviewWrapper,
	ResourceCover,
	ResourceDetail,
	ResourceTitle,
	ResourceDes,
}
