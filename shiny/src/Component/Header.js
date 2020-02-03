import React from "react"
import logo from "../images/shiny.jpg";
import Search from './Search'
import Login from './Login'
import Regisret from './Register'



class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header">
          <div>
            <img src={logo} className="logo" />
          </div>

          {/* <div className="search">
            <Search />
          </div> */}

          <div className="btn-group">
            <button className="butn">Home</button>
            <button className="butn">Contact us</button>
            <button className="butn">About us</button>
          </div>
          <Login/>
          <Regisret/>
          <button className="btnProfile"> </button>
        </header>
            </div>
        )
    }
}

export default Header


