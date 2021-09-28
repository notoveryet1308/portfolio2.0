import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { NavigationLarge, NavigationSmall } from './components/Navigation'
import PageBackground from './components/PageBackground'
import Home from './pages/Home'

function App() {
	return (
		<>
			<PageBackground />
			<Header />
			<NavigationLarge />
			<NavigationSmall />
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</>
	)
}

export default App
