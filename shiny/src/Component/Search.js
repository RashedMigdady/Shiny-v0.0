import React from "react";

export default class Search extends React.Component {
  state = {
    professionType: "All",
    address: ""
  };

  render() {
    return (
      <React.Fragment>
        <div className="dropdown">
          <select
            className="custom-select"
            style={{
              borderRadius: "20%",
              backgroundColor: "black",
              borderColor: "white",
              color: "white",
              borderWidth: "3px"
            }}
          >
            <option value="Builder" selected>
              Builder
            </option>
            <option value="Painter">Painter</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Electrician">Electrician</option>
            <option value="Gardener">Gardener</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Tiler">Tiler</option>
            <option value="Barber">Barber</option>
            <option value="Car_Electrician">Car Electrician</option>
            <option value="Carpenter">Carpenter</option>
          </select>
        </div>

        <div className="dropdown2">
          <select className="custom-select" 
          style={{
              borderRadius: "20%",
              backgroundColor: "black",
              borderColor: "white",
              color: "white",
              borderWidth: "3px"
            }}>
            <option value="Amman" selected>
              Amman
            </option>
            <option value="Irbid">Irbid</option>
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
      </React.Fragment>
    );
  }
}
