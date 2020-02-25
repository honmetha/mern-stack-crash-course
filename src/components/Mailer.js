import React, { Component } from "react";
import EmailTable from "./EmailTable";
import "./components.css";

export default class Mailer extends Component {
  state = {
    emails: []
  };
  handleEmailsSelect = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      const fileContent = reader.result.split("\n")
      let emails = fileContent.slice(1, fileContent.length)
      emails = emails.filter(email => !!email)
      emails = emails.map(email => email.split(","))
      this.setState({ emails });
    };
 
    reader.onerror = () => {
      console.log(reader.error);
      alert("read email error");
    };
  }
  handleRanksSelect = e => {
    let rankfile = e.target.rankfile;
  };

  render() {
    let { emails } = this.state;
    console.warn("emails", emails)
    return (
      <div id="container">
        <div className="box" id="box1">
          <h1>Mailer</h1>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.handleEmailsSelect}
          />
          <br />
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.handleRanksSelect}
          />
          <EmailTable emailsList={emails} />
          <button className="Mailer-Button">ส่งเมล</button>
        </div>
      </div>
    );
  }
}
