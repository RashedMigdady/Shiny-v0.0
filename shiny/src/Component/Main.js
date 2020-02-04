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
import person from "../images/builder.jpg";

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
        <header className="header">
          <div>
            <img src={logo} className="logo" />
          </div>

          <div className="btn-group">
            <button className="butn">Home</button>

            {/* ************************************************************ */}
            <button
              type="button"
              className="butn"
              data-toggle="modal"
              data-target="#exampleModal4"
            >
              Contact US
            </button>

            <div
              class="modal fade"
              id="exampleModal4"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "black" }}
                  >
                    <h5
                      class="modal-title"
                      id="exampleModalLabel"
                      style={{ color: "white" }}
                    >
                      Contact with Shiny Team
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" style={{ color: "white" }}>
                        &times;
                      </span>
                    </button>
                  </div>
                  <div class="modal-body" style={{ backgroundColor: "black" }}>
                    <p style={{ color: "white" }}>phone : 0777522486</p>
                    <br />
                    <p style={{ color: "white" }}>
                      Email : rashedmeg231@gmail.com
                    </p>
                  </div>
                  <div
                    class="modal-footer"
                    style={{ backgroundColor: "black" }}
                  >
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      style={{
                        width: "80px",

                        height: "40px",
                        borderRadius: "20%",
                        backgroundColor: "black",
                        borderColor: "white",
                        color: "white",
                        borderWidth: "3px"
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* **************************************************** */}

            <button
              type="button"
              className="butn"
              data-toggle="modal"
              data-target="#exampleModal3"
            >
              About US
            </button>

            <div
              class="modal fade"
              id="exampleModal3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "black" }}
                  >
                    <h5
                      class="modal-title"
                      id="exampleModalLabel"
                      style={{ color: "white" }}
                    >
                      About Shiny
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" style={{ color: "white" }}>
                        &times;
                      </span>
                    </button>
                  </div>
                  <div class="modal-body" style={{ backgroundColor: "black" }}>
                    <p style={{ color: "white" }}>
                      Shiny is the leading platform for connecting individuals
                      looking for household services with top-quality,
                      pre-screened independent service professionals. From home
                      cleaning to shinyman services, Shiny instantly matches
                      thousands of customers every week with top-rated
                      professionals in cities all around the world. With a
                      seamless 60-second booking process, secure payment, and
                      backed by the Shiny Happiness Guarantee, Shiny is the
                      easiest, most convenient way to book home services.
                    </p>
                  </div>
                  <div
                    class="modal-footer"
                    style={{ backgroundColor: "black" }}
                  >
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      style={{
                        width: "80px",

                        height: "40px",
                        borderRadius: "20%",
                        backgroundColor: "black",
                        borderColor: "white",
                        color: "white",
                        borderWidth: "3px"
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ***************************************************** */}
          </div>
          <button
            style={{
              width: "80px",
              marginLeft: "965px",
              marginTop: "-53px",
              marginBottom: "55px",
              height: "40px",
              borderRadius: "20%",
              backgroundColor: "black",
              borderColor: "white",
              color: "white",
              borderWidth: "3px"
            }}
            onClick={() => this.handelSubmit()}
          >
            Filter
          </button>
          {/* <Login /> */}
          <Regisret />
          {/* <button className="btnProfile"> </button> */}
        </header>
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
              borderWidth: "3px",
              marginLeft: "500px",
              marginTop: "-145px"
            }}
          >
            <option selected>choose Professional</option>
            <option value="builder">Builder</option>
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
              borderWidth: "3px",
              marginLeft: "500px",
              marginTop: "-145px"
            }}
          >
            <option selected>choose City</option>
            <option value="amman">Amman</option>
            <option value="irbid">Irbid</option>
            <option value="aqabah">Aqabah</option>
            <option value="ajloun">Ajloun</option>
            <option value="jarash">Jarash</option>
            <option value="balqah">Balqah</option>
            <option value="mafraq">Mafraq</option>
            <option value="madaba">Madaba</option>
            <option value="maan">Maan</option>
            <option value="tafeleh">Tafeleh</option>
            <option value="zarqa">Zarqa</option>
            <option value="karak">Karak</option>
          </select>
        </div>

        {/* ------------------------------------------------------ */}
        <div className="posts">
          {this.state.workers.map(worker => {
            return (
              <div className="post">
                <img src={person} className="img" />
                <p className="n">
                  {worker.firstName} {worker.lastName}
                </p>
                <p className="type">{worker.ProfessionType}</p>
                <p className="phone">{worker.phone}</p>
                <p className="exp">
                  {worker.yearsOfExperience} years of experience
                </p>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}
