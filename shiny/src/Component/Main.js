import React from "react";
import "../CSS/Main.css";
import logo from "../images/shiny.jpg";
import Search from "./Search";
import Login from './Login'
import Regisret from './Register'
import Posts from './Posts'

import Profile from './Profile'

export default class Main extends React.Component {
  render() {
    return (
      <div className="bbb">
        <header className="header">
          <div>
            <img src={logo} className="logo" />
          </div>

          <div className="search">
            <Search />
          </div>

          <div className="btn-group">
            <button className="butn">Home</button>
            <button className="butn">Contact us</button>
            <button className="butn">About us</button>
          </div>
          <Login/>
          <Regisret/>
          <button className="btnProfile"> </button>
        </header>
        
        <Posts/>
        {/* ************************************************************************************** */}

        <footer
          className="page-footer font-large black pt-4"
          style={{
            backgroundColor: "black",
            position: "absolute",
            left: "0",
            top: "150%",
            width: "100%",
            textAlign: "center",
            height:"350px",
            
          }}
        >
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Shiny</h5>
                <p className="para">
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
              </div>

              {/* <div className="clearfix w-100 d-md-none pb-3">
                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="">Link 1</a>
                    </li>
                    <li>
                      <a href="">Link 2</a>
                    </li>
                    <li>
                      <a href="">Link 3</a>
                    </li>
                    <li>
                      <a href="">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>

                  <ul class="list-unstyled">
                    <li>
                      <a href="">Link 1</a>
                    </li>
                    <li>
                      <a href="">Link 2</a>
                    </li>
                    <li>
                      <a href="">Link 3</a>
                    </li>
                    <li>
                      <a href="">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div className="footer-copyright text-center py-3" style={{color:"white"}}>
              © 2020 Copyright:
              <a href="orange.com" style={{color:"orangered"}}>
                {" "}
                orange.com
              </a>
            </div>
          </div>

          <div  >
            <a href="" className="links" >About us </a> 
            <a href="" className="links" >Contact us </a>
          </div>
        </footer>

        {/*******************************************************************************************/}
      </div>
    );
  }
}
