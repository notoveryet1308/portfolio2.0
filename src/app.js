import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { NavigationLarge, NavigationSmall } from './components/Navigation'
import PageBackground from './components/PageBackground'
import PageMeta from './components/PageMeta'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Project'
import Resource from './pages/Resource'
import Skills from './pages/Skill'

function App() {
	let Head = document.getElementsByTagName('head')
	Head = Array.from(Head)
	Head[0].insertAdjacentHTML('afterbegin', PageMeta.render())
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
				<Route exact path='/resources' component={Resource} />
			</Switch>
		</>
	)
}

export default App
