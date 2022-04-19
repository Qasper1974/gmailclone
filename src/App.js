import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Header from "./app/components/Header";
import Sidebar from "./app/components/Sidebar";
import Mail from './app/components/Mail';
import EmailList from './app/components/EmailList';
import SendMail from './app/components/SendMail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
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
                {sendMessageIsOpen && <SendMail /> }
			</div>
		</Router>
	);
}

export default App;
