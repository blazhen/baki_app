import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import '../assets/global.css'
import Inrecipe from './Inrecipe';


export default class App extends React.Component {
    render () {
        return ( 
            
            <Router>
                <Switch>
                <Route exact path='/' component={Header}/>
                <Route exact path='/Inrecipe' component={Inrecipe}/>               

                </Switch>
            </Router>        
            
        )
    }
};
