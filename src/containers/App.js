import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
} from 'react-router-dom'
import SearchPage from './SearchPage';
import SavedAlbumsPage from './SavedAlbumsPage';

const StyledApp = styled.main`

`;

class App extends PureComponent {
	render() {
		return (
			<StyledApp>
				<Router>
					<div>
						<ul>
							<li><Link to="/">Saved Albums</Link></li>
							<li><Link to="/search">Search</Link></li>
						</ul>
						<hr />
						<Switch>
							<Route exact path="/" component={SavedAlbumsPage} />
							<Route path="/search" component={SearchPage} />
						</Switch>
					</div>
				</Router>
			</StyledApp>
		);
	}
}

export default App;
