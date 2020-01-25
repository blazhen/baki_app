import React from 'react'
import '../assets/SingleRecipe.css'

export default class SingleRecipe extends React.Component{ 
    constructor(props){
        super(props)
        
    }
        //     getInstructionSNumber = () => {
        //        var number = []
        //         for(let i = 0; i<this.props.data.analyzedInstructions[0].steps.length; i++){
        //              number.push(<li>{this.props.data.analyzedInstructions[0].steps[i].number}</li>)
        //              console.log(this.props.data.analyzedInstructions[0].steps[i].number)   
        //         }
        //         return number
        // }
        getInstructionSteps = () => {
            var steps = []
             for(let i = 0; i<this.props.data.analyzedInstructions[0].steps.length; i++){
                  steps.push(<li>{this.props.data.analyzedInstructions[0].steps[i].step}</li>)
                  console.log(this.props.data.analyzedInstructions[0].steps[i].step)   
             }
             return steps
     }

             render(){
                
                return(
                    <React.Fragment>
                    <div className="recipe-container">
                <div className="recipe-info">
                        <div className="recipes-title">
                         <h1>{this.props.data.title}</h1>
                         <div>{!this.props.data.vegeterian ? <div>Not Vegeterian</div> : <div>Vegeterian</div>}</div>
                     </div>
                     <div className="recipes-img">
                         <img src={this.props.data.image} alt="recipe"></img>
                     </div>                
                     <div className="recipes-footer">
                         <div className="recipes-clock">
                         <i className="far fa-clock"><span>This recipe can be ready in:{this.props.data.readyInMinutes}</span></i>
                         </div>
                         <div className="recipes-food">
                <i className="fas fa-utensils"><span>This recipe can serve up to:{this.props.data.servings}</span></i>
                         </div>
                     </div>
                </div>
                     <div className="ingredients-container">
                          <div>
                              <ul>
                                  {this.getInstructionSteps()}
                              </ul>
                            </div>
                     </div>
               
                     
                    
             </div>
             
             
             </React.Fragment>
                )
             }
  }

 