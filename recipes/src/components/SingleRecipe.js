import React from 'react'

export default class SingleRecipe extends React.Component{ 
    constructor(props){
        super(props)
        
    }
                 
             render(){
                
                return(
                    <React.Fragment>
                    <div className="recipes-container">
                 <div className="recipes-title">
                         <h1>{this.props.data.title}</h1>
                     </div>
                     <div className="recipes-img">
                         <img src={this.props.data.image} alt="recipe"></img>
                     </div>                
                     <div className="recipes-footer">
                         <div className="recipes-clock">
                         <i className="far fa-clock"><span>This recipe can be ready in:{this.props.data.readyInMinutes}</span></i>
                         </div>
                         <div className="recipes-food">
                         <i className="fas fa-utensils"><span>This recipe can serve up to:</span></i>
                         </div>
                     </div>
                    
             </div>
             <div>{!this.props.data.vegeterian ? <div>THIS RECIPE IS NOT VEGETERIAN</div> : <div>THIS RECIPE IS VEGETERIAN</div>}</div>
             
             </React.Fragment>
                )
             }
  }

 