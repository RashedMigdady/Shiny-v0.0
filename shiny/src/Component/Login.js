import React from "react";

export default class Home extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            width: "80px",
            marginLeft: "1130px",
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
          Login
        </button>

        <div
          class="modal fade"
          id="exampleModal"
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
                  Login
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
                <label style={{ color: "white" }}>Email</label>
                <input
                  style={{
                    borderRadius: "10px",
                    width: "250px",
                    marginLeft: "50px"
                  }}
                  name="email"
                  type="email"
                  placeholder="Email..."
                ></input>
                <br />
                <label style={{ color: "white" }}> Password </label>
                <input
                  style={{
                    borderRadius: "10px",
                    width: "250px",
                    marginLeft: "20px"
                  }}
                  name="password"
                  type="password"
                  placeholder="Password..."
                ></input>
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
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
