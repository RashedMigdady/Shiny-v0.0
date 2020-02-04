import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    HourlyPrice: "",
    email: "",
    yearsOfExperience: "",
    Address: "",
    ProfessionType: "",
    age: "",
    done: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  send = s => {
      delete this.state.done
    console.log(this.state);
    axios
      .post("http://localhost:9000/profession/register", this.state)
      .then(({ data }) => {
        this.setState({
          done: "Done!"
        });
        console.log(data);
      }).catch(error => {
          console.log(error)
      });
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="Register"
          data-toggle="modal"
          data-target="#exampleModal1"
          style={{
            width: "100px",
            marginLeft: "1230px",
            marginTop: "-90px",
            marginBottom: "30px",
            height: "40px",
            borderRadius: "20%",
            backgroundColor: "black",
            borderColor: "white",
            color: "white",
            borderWidth: "3px"
          }}
        >
          Join Now
        </button>

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" style={{ backgroundColor: "black" }}>
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "white" }}
                >
                  Join
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
              <div
                class="modal-body"
                style={{ backgroundColor: "black", display: "block" }}
              >
                <h3>{this.state.done}</h3>
                <div>
                  <label style={{ color: "white" }}>First Name</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="firstName"
                    onChange={this.change}
                  ></input>
                </div>
                <br />

                <div>
                  <label style={{ color: "white" }}>Last Name</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="lastName"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>The Profession Type</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="ProfessionType"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>years of Experience</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="yearsOfExperience"
                    type="number"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>The Age</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="age"
                    type="number"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>Your phone number</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="phone"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>Your Address</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="Address"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}>Hourly Price</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="HourlyPrice"
                    type="number"
                    onChange={this.change}
                  ></input>
                </div>

                <br />
                <div>
                  <label style={{ color: "white" }}>Email</label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "50px"
                    }}
                    name="email"
                    type="email"
                    onChange={this.change}
                  ></input>
                </div>
                <br />
                <div>
                  <label style={{ color: "white" }}> Password </label>
                  <input
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      marginLeft: "20px"
                    }}
                    name="password"
                    type="password"
                    onChange={this.change}
                  ></input>
                </div>
              </div>
              <div class="modal-footer" style={{ backgroundColor: "black" }}>
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
                <button
                  type="button"
                  style={{
                    width: "80px",

                    height: "40px",
                    borderRadius: "20%",
                    backgroundColor: "black",
                    borderColor: "white",
                    color: "white",
                    borderWidth: "3px"
                  }}
                  onClick={this.send}
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
