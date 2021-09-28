import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'MS Gothic';
	font-size: 0.625%;
}
p{
	margin: 0;
	padding: 0;
}
 
`

export default GlobalStyle
