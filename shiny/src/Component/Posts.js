import React from 'react'
import '../CSS/Posts.css'
//import {hh} from 'bootstrap';


export default class Posts extends React.Component{
    render(){
        return(
            <>
            <div className="posts" >
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
            </>
        );
    }
}