import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { NavigationLarge, NavigationSmall } from './components/Navigation'
import PageBackground from './components/PageBackground'
import Home from './pages/Home'
import Skills from './pages/Skill'

function App() {
	return (
		<>
			<PageBackground />
			<Header />
			<NavigationLarge />
			<NavigationSmall />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/skills' component={Skills} />
			</Switch>
		</>
	)
}

export default App
