import React from "react"
import "../css/style.css"
import "../css/Navigation.css"
import Login from "./Login"
import Signup from "./Signup"
import Calendar from "./Calendar"
import About from "./About";
import Contact from "./Contact";
import {
  Route,
  Link,
  HashRouter as Router,
  Switch
} from "react-router-dom"
class Navigation extends React.Component {
  state = {
    date: new Date(),
    appointmentsReceived: [],
    loginPressed: false,
    signupPressed: false,
    loggedIn: false
  }
  logout = () => {
    localStorage.clear("jwt")
    this.setState(prevState => ({
      check: !prevState.check
    }));
  }
  ShowLogin = () => {
    this.setState({loginPressed: true, signupPressed: false})
  }
  closeLogin = () => {
    this.setState({loginPressed: false, signupPressed: false})
  }
  ShowSignup = () => {
    this.setState({signupPressed: true, loginPressed: false})
  }
  closeSignup = () => {
    this.setState({signupPressed: false, loginPressed: false})
  }
  render() {
  return(
    <header className="header">
        <h1 className="logo" onClick={this.closeLogin}><a href="#">Calendario</a></h1>
        <ul className="main-nav">
            <li><Link to="/" onClick={this.closeLogin}>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            {localStorage.jwt === undefined && this.state.loginPressed === false && <li><Link to="/login" onClick={this.ShowLogin}>Login</Link></li>}
            {localStorage.jwt === undefined && this.state.signupPressed === false && <li><Link to="/signup" onClick={this.ShowSignup}>Sign Up</Link></li>}
            {localStorage.jwt !== undefined && <li id="specialChild" onClick={this.logout}>Logout</li>}
        </ul>
        {this.props.children}
      </header>
    )
  }
}
export default Navigation;
