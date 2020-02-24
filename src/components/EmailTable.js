import React, { Component } from 'react';
import './components.css';

export default class EmailTable extends Component {
  render() {
    
    return (
      <table>
        <tr>
          <td>อีเมล</td>
          <td>ข้อความ</td>
          <td>สถานะ</td>
        </tr>
        {this.props.emailsList.map((element)=>(
          <tr>
            <td>{element.email}</td>
            <td>{element.user_name}</td>
            <td>READY</td>
          </tr>
        ))
        }
      </table>
    )
  }
}
