import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import Sidebar from "./app/components/Sidebar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/mail">
                            <Mail />
                        </Route>
						<Route path="/">
                            <EmailList />
                        </Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
