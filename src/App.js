import React, {Component} from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import {
    Container,
} from 'semantic-ui-react'


import {Route} from "react-router-dom";
import Header from './components/Header';
import MostViewedPage from "./components/pages/MostViewedPage";
import MostSharedPage from "./components/pages/MostSharedPage";
import MostEmailedPage from "./components/pages/MostEmailedPage";
import NewsPage from "./components/pages/NewsPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Container>
                    <Route exact path="/" component={NewsPage}></Route>
                    <Route path="/mostviewed" component={MostViewedPage}></Route>
                    <Route path="/mostshared" component={MostSharedPage}></Route>
                    <Route path="/mostemailed" component={MostEmailedPage}></Route>
                </Container>
            </div>
        );
    }
}

export default App;
