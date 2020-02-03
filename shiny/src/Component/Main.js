import React from "react";
import "../CSS/Main.css";
import logo from "../images/shiny.jpg";
import Login from "./Login";
import Regisret from "./Register";
import Posts from "./Posts";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Profile from "./Profile";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    workers: [],
    city: "",
    type: ""
  };

  handelChange = e => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handelSubmit = () => {
    axios
      .get(
        `http://localhost:9000/profession/filter/${this.state.city}/${this.state.type}`
      )
      .then(res => {
        this.setState({ workers: res.data.result });
      });
  };

  render() {
    return (
      <div className="bbb">
        <Header />
        <div className="dropdown">
          <select
            name="type"
            onChange={this.handelChange}
            className="custom-select"
            style={{
              borderRadius: "20%",
              backgroundColor: "black",
              borderColor: "white",
              color: "white",
              borderWidth: "3px"
            }}
          >
            <option value="builder" selected>
              Builder
            </option>
            <option value="painter">Painter</option>
            <option value="cleaner">Cleaner</option>
            <option value="electrician">Electrician</option>
            <option value="gardener">Gardener</option>
            <option value="mechanic">Mechanic</option>
            <option value="tiler">Tiler</option>
            <option value="barber">Barber</option>
            <option value="car_Electrician">Car Electrician</option>
            <option value="carpenter">Carpenter</option>
            <option value="blacksmith">Blacksmith</option>
          </select>
        </div>

        <div className="dropdown2">
          <select
            onChange={this.handelChange}
            name="city"
            className="custom-select"
            style={{
              borderRadius: "20%",
              backgroundColor: "black",
              borderColor: "white",
              color: "white",
              borderWidth: "3px"
            }}
          >
            <option value="Amman" selected>
              Amman
            </option>
            <option value="irbid">Irbid</option>
            <option value="Aqabah">Aqabah</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Jarash">Jarash</option>
            <option value="Balqah">Balqah</option>
            <option value="Mafraq">Mafraq</option>
            <option value="Madaba">Madaba</option>
            <option value="Maan">Maan</option>
            <option value="Tafeleh">Tafeleh</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Karak">Karak</option>
          </select>
        </div>
        <button onClick={() => this.handelSubmit()}>Filter</button>
        {/* ------------------------------------------------------ */}
        <div className="posts">
          {this.state.workers.map(worker => {
            return (
              <div>
                <p>{worker.firstName}</p>
                <p>{worker.Address}</p>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}
