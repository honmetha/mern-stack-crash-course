import React, { Component } from "react";
import EmailTable from "./EmailTable";
import "./components.css";
import axios from "axios";

export default class Mailer extends Component {
  state = {
    emails: [],
    ranks: [],
    hasSent: false,
    closeButtonStatus: false
  };
  handleEmailsSelect = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      const fileContent = reader.result.split("\n");
      let emails = fileContent.slice(1, fileContent.length);
      emails = emails.filter(email => !!email);
      emails = emails.map(email => {
        email = email.split(",");
        email.push(false);
        email.push(false);
        return email;
      });
      this.setState({ emails });
    };

    reader.onerror = () => {
      console.log(reader.error);
      alert("read email error");
    };
  };
  handleRanksSelect = e => {
    let rankfile = e.target.files;
    let reader = new FileReader();
    reader.readAsText(rankfile[0]);
    reader.onload = () => {
      const fileContent = reader.result.split("\n");
      let ranks = fileContent.slice(1, fileContent.length);
      ranks = ranks.filter(rank => !!rank);
      ranks = ranks.map(rank => rank.split(","));
      this.setState({ ranks });
    };

    reader.onerror = () => {
      console.log(reader.error);
      alert("read rank error");
    };
  };

  sendMails = async () => {
    const { emails, ranks } = this.state;
    if (emails.length !== 0 && ranks.length !== 0) {
      for (let index = 0; index < emails.length; index++) {
        const email = emails[index];
        if (!email[4]) {
          this.setState(state => ({
            emails: state.emails.map((email, indexIn) => {
              if (index === indexIn) {
                email[5] = true;
                return email;
              } else {
                return email;
              }
            })
          }));
          let sendSuccess = false;
          try {
            await axios.post(
              "https://us-central1-frontend-assignment-d6597.cloudfunctions.net/sendMail",
              {
                email: email[0],
                subject: "Hello",
                body: "Hello World"
              }
            );
            sendSuccess = true;
          } catch (error) {
            sendSuccess = false;
            console.log(error);
          } finally {
            this.setState(state => ({
              emails: state.emails.map((email, indexIn) => {
                if (index === indexIn) {
                  email[4] = sendSuccess;
                  email[5] = false;
                  return email;
                } else {
                  return email;
                }
              })
            }));
          }
        }
      }
    }
    this.setState({ hasSent: true });
  };

  getButtonTitle = () => {
    const { emails, hasSent, closeButtonStatus } = this.state;
    let buttonTitle = "";
    let check = false;
    emails.forEach(email => {
      if (email[4]) {
        buttonTitle = "ปิด";
      } else check = true;
    });
    if (buttonTitle && !check) {
      if (!closeButtonStatus) {
        this.setState({ closeButtonStatus: true });
      }
      return buttonTitle;
    }
    if (hasSent) {
      buttonTitle = "ลองส่งอีเมลล์ที่ล้มเหลวอีกครั้ง";
    } else {
      buttonTitle = "ส่งเมลล์";
    }
    return buttonTitle;
  };

  closeWindows() {
    window.close()
  }

  render() {
    const { emails, ranks, hasSent, closeButtonStatus } = this.state;
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
          <EmailTable emailsList={emails} ranksList={ranks} hasSent={hasSent} />
          {!closeButtonStatus ? (
            <button className="Mailer-Button" onClick={this.sendMails}>
              {this.getButtonTitle()}
            </button>
          ) : (
            <button className="Mailer-Button" onClick={this.closeWindows}>
              {this.getButtonTitle()}
            </button>
          )}
        </div>
      </div>
    );
  }
}
