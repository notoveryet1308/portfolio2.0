import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { NavigationLarge, NavigationSmall } from './components/Navigation'
import PageBackground from './components/PageBackground'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Project'
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
				<Route exact path='/projects' component={Project} />
				<Route exact path='/about' component={About} />
			</Switch>
		</>
	)
}

export default App
