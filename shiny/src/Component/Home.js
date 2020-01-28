import React from 'react'
import Posts from './Posts'
import '../CSS/Home.css';
//import {header} from 'bootstrap'





export default class Home extends React.Component{
    state = {
        
    }


    render(){
        return(
            <>
            <header className="h">
                <button className="b">Shiny</button>
                <button type="button" class="btn btn-primary">Primary</button>
                
                <div className="w3-bar w3-green">
                <a href="#" className="w3-bar-item w3-button">Home</a>
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>

            </header>
            
            <div className="win">
              <Posts/>
            </div>
            
            



            </>
        );
    }
    
}