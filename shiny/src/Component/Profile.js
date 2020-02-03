import React from "react";
import person from "../images/builder.jpg";
import "../CSS/Profile.css";
import Header from "./Header";
import Footer from './Footer';

export default class Home extends React.Component {
  state = {
    firstName: "ali",
    lastName: "ahmad",
    typeProfession: "Painter",
    email: "ali@gmail.com",
    rate: "",
    phone: "0777777777",
    hourlyPrice: "50",
    age: "30",
    address: "amman",
    yearsOfExperience: "18",
    views: "20"
  };

  render() {
    return (
      <div className="profile">
        <Header />

        <div className="info">
          <div className="info1">
            <img src={person} className="person" />
            <lebel className="name">
              {this.state.firstName} {this.state.lastName}
            </lebel>
          </div>

          <div className="dd">
            <div className="d">
              <lebel className="details" style={{ display: "block" }}>
                Profession Type : {this.state.typeProfession}
              </lebel>
              <lebel className="details">
                Hourly Price : {this.state.hourlyPrice} JD
              </lebel>
            </div>
            <div className="d">
              <lebel className="details" style={{ display: "block" }}>
                Years of Experience : {this.state.yearsOfExperience} Years
              </lebel>
              <lebel className="details">Phone : {this.state.phone}</lebel>
            </div>
            <div className="d">
              <lebel className="details" style={{ display: "block" }}>
                Email : {this.state.email}
              </lebel>
              <lebel className="details">Address : {this.state.address} </lebel>
            </div>
            <div className="d">
              <lebel className="details" style={{ display: "block" }}>
                Age : {this.state.age} Years
              </lebel>
              {/* <lebel className="details">Rate :{this.state.rate} </lebel> */}
            </div>
          </div>
          <button className="editProfile">Edit Profile</button>

          <Footer/>
        </div>
        
      </div>
    );
  }
}
