import React, { Component } from "react";
import EmailTable from "./EmailTable";
import './components.css';

export default class Mailer extends Component {
  render() {
    let emails = [
      {
        email: "google@google.com",
        user_name: "GOOGLE",
        user_next_rank_id: 3,
        reviews_left_to_uprank: 4
      },
      {
        email: "google@google.com",
        user_name: "GOOGLE",
        user_next_rank_id: 3,
        reviews_left_to_uprank: 4
      },
      {
        email: "google@google.com",
        user_name: "GOOGLE",
        user_next_rank_id: 3,
        reviews_left_to_uprank: 4
      }
    ];

    return (
      <div>
        <h1>Mailer</h1>
        <input type="file" id="myfile" name="myfile" />
        <br />
        <input type="file" id="myfile" name="myfile" />
        <EmailTable emailsList={emails}/>
        <button className="Mailer-Button">ส่งเมล</button>
      </div>
    );
  }
}
