import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home, Header, Footer, About, Projects}  from './component';
import './style.css'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
                    <Route exact path="/about">
						<About />
					</Route>
                    <Route exact path="/projects">
						<Projects />
					</Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))