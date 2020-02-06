import React from "react"
import "../css/style.css"
import {
  Route,
  Link,
  HashRouter as Router
} from "react-router-dom"
import axios from "axios"
import ShowDate from "./ShowDate"
import ShowEvent from "./ShowEvent"
class Calendar extends React.Component {
  render() {
    return(
      <div>
      <h1> Month </h1>
        <Router>
        <div id="calendar">
          <span className="border weekday" >Sunday</span>
          <span className="border weekday" >Monday</span>
          <span className="border weekday" >Tuesday</span>
          <span className="border weekday" >Wednesday</span>
          <span className="border weekday" >Thursday</span>
          <span className="border weekday" >Friday</span>
          <span className="border weekday" >Saturday</span>
          <Link to="/calendar/01/01/2001" className="border weeknumber">1</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">2</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">3</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">4</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">5</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">6</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">7</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">8</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">9</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">10</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">11</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">12</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">13</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">14</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">15</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">16</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">17</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">18</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">19</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">20</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">21</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">22</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">23</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">24</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">25</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">26</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">27</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">28</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">29</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">30</Link>
          <Link to="/calendar/01/01/2001" className="border weeknumber">31</Link>
        </div>
        </Router>
      </div>
    )
  }
}

export default Calendar
