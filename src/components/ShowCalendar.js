import React from "react"
import "../css/style.css"
import $ from "jquery"
import Login from "./Login"
import Signup from "./Signup"
import {
  Route,
  Link,
  HashRouter as Router
} from "react-router-dom"
import axios from "axios"
import ShowDate from "./ShowDate"
import ShowEvent from "./ShowEvent"
import Calendar from 'react-calendar/dist/entry.nostyle';
import PropTypes from 'prop-types'
class ShowCalendar extends React.Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({date})

  clickDay = (dateInfo) => {
    const data = dateInfo.toString().split(" ");
    const day = data[2];
    let month = data[1];
    const year = data[3];
    const monthNum = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    month = monthNum[monthShort.indexOf(month)]
    const route = `/calendar/${day}/${month}/${year}`;
    this.props.history.push(route);
  }
  render() {
    return(
      <div>
        <Calendar onChange={this.onChange} value = {this.state.date} onClickDay = {this.clickDay} />
      </div>
    )
  }
}

export default ShowCalendar;
