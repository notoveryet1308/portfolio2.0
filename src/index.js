import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './app'
// import './index.scss'
import theme from './theme'
import GlobalStyle from './globalStyle'

ReactDom.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root'),
)
