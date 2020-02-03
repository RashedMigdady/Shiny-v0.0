import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <footer
          className="page-footer font-large black pt-4"
          style={{
            backgroundColor: "black",
            position: "absolute",
            left: "0",
            top: "150%",
            width: "100%",
            textAlign: "center",
            height: "350px"
          }}
        >
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Shiny</h5>
                <p className="para" style={{width:"500px"}}>
                  Shiny is the leading platform for connecting individuals
                  looking for household services with top-quality, pre-screened
                  independent service professionals. From home cleaning to
                  shinyman services, Shiny instantly matches thousands of
                  customers every week with top-rated professionals in cities
                  all around the world. With a seamless 60-second booking
                  process, secure payment, and backed by the Shiny Happiness
                  Guarantee, Shiny is the easiest, most convenient way to book
                  home services.
                </p>
              </div>

              
            </div>

            <div
              className="footer-copyright text-center py-3"
              style={{ color: "white" }}
            >
              © 2020 Copyright:{  }
              <a href="orange.com" style={{ color: "orangered" }}>
                
                orange.com
              </a>
            </div>
          </div>

          <div style={{marginTop:"-100px" , marginRight:"30px"}}>
            <a href="" className="links">
              About us
            </a><br></br>
            <a href="" className="links">
              Contact us
            </a>
          </div>
        </footer>
      </>
    );
  }
}
