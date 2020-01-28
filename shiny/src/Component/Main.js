import React from 'react'
import '../CSS/Main.css'
import logo from '../images/shiny.jpg'


export default class Main extends React.Component{
    render(){
        return(
            <div className="bbb" >



                 <header className="header">

                   <img src={logo} className="logo"/>

                   <div  className="btn-group" role="group" aria-label="Basic example">
                     
                     <button type="button" class="btn btn-dark" >Home</button>
                     <button type="button" class="btn btn-dark">Contact</button>
                     <button type="button" class="btn btn-dark" >About</button>

                   </div>


                 </header>
                
                
                

            </div>
        );
    }
}