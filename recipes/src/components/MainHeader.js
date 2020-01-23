import React from 'react'

export const  MainHeader = () => {
    return (
        <div id="header">
            <div className="header-container">                
                    <i className="fas fa-home"></i>
                    <a className="logo" href="/"><h1>Crunch Recipes</h1></a>     
            </div>
            <div className="search-user">
                <i className="fas fa-search"></i>
                <i className="fas fa-user"></i>
            </div>            
        </div>
    )
}