﻿//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles/styles.css";
import "./styles/carousel.css";
import "./styles/dropdown.css";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header';
import Home from './components/home';
import Map from './components/map';
import MyItems from './components/myItems';
import MyCollections from './components/myCollections';
import MyAnnouncements from './components/myAnnouncements';
import ItemCollectionPage from './components/itemCollectionPage';
import CreateItem from './components/createItem';
import OnBoardingForm from './components/onboardingForm';
import Search from './components/search';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBoarded: false,
            loggedIn: false
        }
    }

    componentDidMount() {
        const onBoarded = localStorage.getItem('onBoarded') === 'true';
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        this.setState({
            onBoarded: onBoarded,
            loggedIn: loggedIn
        });
    }

    onBoard = (isOnBoarded) => {
        this.setState({
            onBoarded: isOnBoarded
        });
        localStorage.setItem('onBoarded', isOnBoarded);
    }

    logIn = (loggedIn) => {
        //console.log('before: ', this.state.loggedIn, ' |after: ', loggedIn);
        this.setState({
            loggedIn: loggedIn
        });
        localStorage.setItem('loggedIn', loggedIn);
    }

    render() {
        return (
            <div className="rootPage">
                <Switch>
                    <Route path="/" exact
                        render={() => {
                            return (
                                this.state.onBoarded ?
                                    <Redirect to="/home" /> :
                                    <Redirect to="/onBoard" />
                            )
                        }}
                    />
                    <Route path="/onBoard" render={() => (
                        <OnBoardingForm onBoard={(x) => this.onBoard(x)} />)} />
                    <Route path="/home"
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <Home />
                                </div>
                            )

                        }}
                    />
                    <Route path="/map"
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <Map />
                                </div>
                            )
                        }}
                    />
                    <Route path="/myItems"
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <MyItems />
                                </div>
                            )
                        }}
                    />
                    <Route path="/myCollections" 
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <MyCollections />
                                </div>
                            )
                        }}
                    />
                    <Route path="/myAnnouncements" 
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <MyAnnouncements />
                                </div>
                            )
                        }}
                    />
                    <Route path="/itemPage" 
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <ItemCollectionPage />
                                </div>
                            )
                        }}
                    />
                    <Route path="/createItem" 
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <CreateItem />
                                </div>
                            )
                        }}
                    />
                    <Route path="/search" 
                        render={() => {
                            return (
                                <div>
                                    <Header logIn={(x) => this.logIn(x)} loggedIn={this.state.loggedIn} />
                                    <Search />
                                </div>
                            )
                        }}
                    />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><Homepage /></BrowserRouter>, document.getElementById('root'));