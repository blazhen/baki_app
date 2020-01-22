import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sliderce from "./Sliderce";
import '../assets/global.css'
import {MainHeader} from './MainHeader'


export default class App extends React.Component {
    render () {
        return ( 
            
            <Router>
                <MainHeader/>
                <Switch>
                <Route exact path='/' component={Sliderce}/>
                {/* <Route path='/:id' component={Recipes}/>                                */}

                </Switch>
            </Router>        
            
        )
    }
};
