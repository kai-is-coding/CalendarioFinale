import React from "react"
import Calendar from "./Calendar"
import ShowDate from "./ShowDate"
import ShowEvent from "./ShowEvent"
import About from "./About";
import Contact from "./Contact";
import axios from "axios"
import CreateAppointment from "./CreateAppointment"
import ShowCalendar from "./ShowCalendar"
import Navigation from "./Navigation"
import Login from "./Login"
import Signup from "./Signup";
import '../css/style.css'
import {
  Route,
  Link,
  HashRouter as Router,
  Switch
} from "react-router-dom"
class Main extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Navigation></Navigation>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/" component={ShowCalendar}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/calendar/:day/:month/:year/create/appointment" component={CreateAppointment}></Route>
          <Route exact path="/calendar/:day/:month/:year" component={ShowDate}></Route>
          <Route exact path="/calendar/:day/:month/:year/:event" component={ShowEvent}></Route>
          <br/>          <br/>
            <br/>
              <br/>
        <footer>&copy; GROUP BUSINESSS PRODUCTION 2020</footer>
        </Router>
      </div>
    )
  }
}

export default Main
