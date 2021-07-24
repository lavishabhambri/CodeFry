import React, { Component } from 'react'
import Video from './Video'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  ContainerBoard from './Drawing-Board/Container/container';



class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />

						{/* Drawing Board */}
						<Route path="/draw" exact component={ ContainerBoard }></Route>
						
						<Route path="/:url" component={Video} />
						

					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;