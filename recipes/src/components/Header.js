import React from 'react';
import Recipes from './Recipes';

export default class Header extends React.Component {
    render () {
        return ( 
        <React.Fragment>
        <div id="header">
            <div className="header-container">                
                    <i class="fas fa-home"></i>
                    <a class="logo" href="/"><h1>Crunch Recipes</h1></a>     
            </div>
            <div className="search-user">
                <i class="fas fa-search"></i>
                <i class="fas fa-user"></i>
            </div>            
        </div>
        <div>
            <Recipes/>
        </div>
        </React.Fragment>     
            
        )
    }
};