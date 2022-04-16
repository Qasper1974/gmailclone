import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Header from "./app/components/Header";
import Sidebar from "./app/components/Sidebar";
import Mail from './app/components/Mail';
import EmailList from './app/components/EmailList';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/" exact>
							<EmailList />
						</Route>
						<Route path="/mail" >
							<Mail />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
