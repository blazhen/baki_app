import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import '../assets/global.css'



export default class App extends React.Component {
    render () {
        return ( 
            
            <Router>
                <Switch>
                <Route exact path='/' component={Header}/>                               

                </Switch>
            </Router>        
            
        )
    }
};
