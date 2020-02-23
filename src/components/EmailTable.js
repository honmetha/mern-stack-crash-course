import React, { Component } from 'react'

export default class EmailTable extends Component {
  render() {
    
    return (
      <table>
        <tr>
          <td>Cell A</td>
          <td>Cell B</td>
          <td>Cell C</td>
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
