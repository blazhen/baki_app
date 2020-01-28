import React from 'react'
import '../assets/SingleRecipe.css'

export default class SingleRecipe extends React.Component{ 
    constructor(props){
        super(props);     
        
        
    }
     
     getInstructionSteps = () => {
            var steps = []
             for(let i = 0; i<this.props.data.analyzedInstructions[0].steps.length; i++){
                  steps.push(<li>{this.props.data.analyzedInstructions[0].steps[i].step}</li>)
                  console.log(this.props.data.analyzedInstructions[0].steps[i].step)   
             }
             return steps
     }
     getIngredients = () => {
        var ingredients = []
         for(let i = 0; i<this.props.data.extendedIngredients.length; i++){
              ingredients.push(<li>{this.props.data.extendedIngredients[i].amount} {this.props.data.extendedIngredients[i].unit} {this.props.data.extendedIngredients[i].name}</li>)
              console.log(this.props.data.extendedIngredients[i])   
         }
         return ingredients
 }

             render(){
                
                return(
                    <React.Fragment>
                        
<div className="recipe-container">
    <div className="recipes-info">
        <div className="recipe-info">
            <div className="recipes-title">
                <h1>{this.props.data.title}</h1>                         
            </div>
                <div className="recipes-img">
                    <img src={this.props.data.image} alt="recipe"></img>
                </div>                
                    <div className="recipes-footer">
                        <div className="recipes-clock">
                            <i className="far fa-clock"><span> This recipe can be ready in: {this.props.data.readyInMinutes} mins.</span></i>
                        </div>
                            <div className="recipes-food">
                                <i className="fas fa-utensils"><span> This recipe can serve up to: {this.props.data.servings} people.</span></i>
                            </div>
                                <div className="preparation-mins">
                                    <i className="fas fa-clock"><span> Preparation time: {this.props.data.preparationMinutes} mins.</span></i>
                                </div>
                                    <div className="cooking-mins">
                                        <i className="fas fa-stopwatch"><span> Cooking: {this.props.data.cookingMinutes} mins.</span></i>
                                    </div>
                    </div>                                                
        </div>
                     <div className="something">
                            <h1>{!this.props.data.Vegetarian ? <div>Not Vegeterian</div> : <div>Vegeterian</div>}</h1>
                            <h1>{!this.props.data.dairyFree ? <div>Not Dairy Free</div> : <div>Diary Free</div>}</h1>
                        </div> 
                        <div className="winePairing">
                            <div className="wine-title">
                                <h1>Wine Pairing</h1>
                            </div>
                            <div className="wine-text">
                                <span>
                                 {this.props.data.winePairing.pairingText}
                                </span>
                            </div>
                                </div>                       
                        
    </div>                
                    <div className="ingredients-container">                    
                        <h1>Ingredients</h1>
                        <div className="ol-list">
                        <ol>   
                         {this.getIngredients()}
                        </ol> 
                        </div>                   
                     </div>                                                       
</div>
    <div className="instruction-container">   
        <div className="ins-title">
             <span>Step by Step</span>              
        </div>
             <div className="ins-list">                   
                <ol>
                    {this.getInstructionSteps()}                                  
                </ol>  
            </div>             
                         
    </div>     
    <div className="created-by">
    <span>App Created by:<a href="https://github.com/blazhen/baki_app" target="_blank">Baki</a></span>
        </div>   
                                         
             </React.Fragment>
                )
             }
  }

 