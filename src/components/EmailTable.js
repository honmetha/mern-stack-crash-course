import React, { Component } from 'react';
import './components.css';

export default class EmailTable extends Component {
  render() {
    let { emails } = this.props;
    return (
      <div className="emailtable-centerdiv">
        <table className="emailtable-table">
          <thead>
          <tr>
            <td>อีเมล</td>
            <td>ข้อความ</td>
            <td>สถานะ</td>
          </tr>
          </thead>
          <tbody>
          {this.props.emailsList.map((element, index)=>(
            <tr key={index}>
              <td>{element[0]}</td>
              <td>{element[1]}</td>
              <td>READY</td>
            </tr>
          ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}
