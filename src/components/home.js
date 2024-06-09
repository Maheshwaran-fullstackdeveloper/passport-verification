import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(1);
    event.preventDefault();
    console.log("handleSubmit");
    this.setState({
      redirectTo: "/login",
    });
  }
  render() {
    const imageStyle = {
      width: 400,
    };
    return (
      <div>
        <img
          class="passpic"
          style={imageStyle}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Indian_Passport.svg/800px-Indian_Passport.svg.png"
        />
        <p class="introtext">
          Welcome to our Passport Application Portal. We are committed to making
          your passport application process smooth and hassle-free. Our website
          provides all the necessary information and tools to guide you through
          each step of obtaining your passport. From filling out the application
          form to scheduling your appointment, our user-friendly platform
          ensures a seamless experience. You can track the status of your
          application, find answers to frequently asked questions, and access
          important resources. Whether you are applying for a new passport,
          renewing an existing one, or seeking assistance with passport-related
          queries, our dedicated support team is here to help you every step of
          the way. Start your passport journey with us today and enjoy a
          stress-free application process.
        </p>

        <img src="https://static.toiimg.com/photo/62632068.cms" />
        <h2>REGULAR INDIAN PASSPORT:-</h2>
        <p class="introtext">
          A regular Indian passport is a crucial document for Indian citizens,
          enabling international travel and serving as a key identity proof.
          Issued by the Ministry of External Affairs, it comes in three types:
          Ordinary (Type P), Official (Type S), and Diplomatic (Type D). The
          Ordinary Passport is the most common, valid for 10 years for adults
          and 5 years for minors. The application process involves online
          registration, document submission, fee payment, appointment booking,
          and police verification. Expedited services are available through the
          Tatkal scheme for urgent needs. For detailed information and updates,
          visit the official Passport Seva website.
        </p>
        <h2>OFFICIAL INDIAN PASSPORT:-</h2>
        <p class="introtext">
          An Official Indian Passport, classified as Type S, is issued to
          individuals traveling abroad on official government business. This
          passport is distinct from the Ordinary Passport and is granted to
          government officials, employees, and other designated personnel when
          they undertake duties or assignments overseas. The Official Passport
          facilitates smooth international travel and ensures diplomatic
          courtesies are extended to the bearer. It is essential for
          representing India's interests and conducting official work abroad.
          The issuance process includes verification and approval by relevant
          government authorities, ensuring the passport is used strictly for
          official purposes. For more information, visit the Passport Seva
          website.
        </p>
        <h2>DIPLOMATIC INDIAN PASSPORT:-</h2>
        <p class="introtext">
          A Diplomatic Indian Passport, categorized as Type D, is issued to
          Indian diplomats and their families for official diplomatic travel.
          This passport is granted to high-ranking government officials,
          diplomats, and individuals representing India in international forums.
          It provides the bearer with diplomatic immunity and privileges as per
          international laws and conventions, facilitating smooth and unhindered
          travel for official diplomatic missions. The Diplomatic Passport is an
          essential tool for conducting international relations and promoting
          India's interests abroad. The issuance process involves stringent
          verification and approval by the Ministry of External Affairs. For
          further details, visit the Passport Seva website.
        </p>
        <a href="/login">
          <button class="apply" type="Login">
            Login
          </button>
        </a>

        <footer class="foot">
          © 2024 Content Owned by Ministry of External Affairs, Government of
          India
        </footer>
      </div>
    );
  }
}

export default Home;
