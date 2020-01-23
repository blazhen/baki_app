import React from 'react';
import axios from 'axios'
import  SingleRecipe  from './SingleRecipe';
export default class Recipes extends React.Component{
    constructor(props){
        super(props)
     
        this.state = {
            data: null,
         }
    }
    
   

    componentDidMount(){
        axios.get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=a8a78069d78b4d5d99564bbf6316dced`)
          .then((res) =>
           { 
               console.log(res)
                const recipes =  <SingleRecipe data={res.data}/>
                this.setState({data : recipes })
                      
              
             
      })
        .catch(error => console.error(error));
      }
    render() {
       
        return(
            <React.Fragment>
                {this.state.data}
                
            </React.Fragment>
        )
            
        
       
    }
}

