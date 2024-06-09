import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class apply extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fname: "",
      dob: "",
      pno: "",
      state: "",
      city: "",
      aadharno: "",
      panno: "",
      redirectTo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert("SUCCESSFULLY SENT!!!")
    console.log("handleSubmit");
    this.setState({
      redirectTo: "/",
    });
  }

  render() {
    const imageStyle = {
      width: 400,
    };
    return (
      <div>
        <h2 class="fill">Fill Up The Form</h2>
        <div class="formtab">
          <form class="formungo">
            <label class="peru labelungo ">NAME</label>
            <input
              type="char"
              placeholder="ENTER YOUR NAME"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">FATHER'S NAME</label>
            <input
              type="char"
              placeholder="ENTER YOUR FATHER'S NAME"
              value={this.state.fname}
              onChange={this.handleChange}
              name="fname"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">DATE OF BIRTH</label>
            <input
              type="date"
              placeholder="ENTER YOUR DOB"
              value={this.state.dob}
              onChange={this.handleChange}
              name="dob"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">PHONE NUMBER</label>
            <input
              type="int"
              placeholder="ENTER YOUR PHONE NUMBER"
              value={this.state.pno}
              onChange={this.handleChange}
              name="pno"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">STATE</label>
            <input
              type="char"
              placeholder="ENTER YOUR STATE"
              value={this.state.state}
              onChange={this.handleChange}
              name="state"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">CITY</label>
            <input
              type="char"
              placeholder="ENTER YOUR CITY"
              value={this.state.city}
              onChange={this.handleChange}
              name="city"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">AADHAR NUMBER</label>
            <input
              type="int"
              placeholder="ENTER YOUR AADHAR NUMBER"
              value={this.state.aadharno}
              onChange={this.handleChange}
              name="aadharno"
            ></input>
            <br></br>
            <br></br>
            <label class="labelungo">PAN NUMBER</label>
            <input
              type="int"
              placeholder="ENTER YOUR PAN NUMBER"
              value={this.state.panno}
              onChange={this.handleChange}
              name="panno"
            ></input>
            <br></br>
            <br></br>
            <button class="takkunu" onClick={this.handleSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
        <footer class="foot">
          © 2024 Content Owned by Ministry of External Affairs, Government of
          India
        </footer>
      </div>
    );
  }
}

export default apply;
