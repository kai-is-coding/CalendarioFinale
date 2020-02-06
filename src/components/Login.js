import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import $ from "jquery"
class Login extends React.Component {
  state = {
    userReceived: [],
    email: "",
    password: ""
  }
  login = () => {
    axios.post("http://localhost:3000/api/user_token", {auth: {email: this.state.email, password: this.state.password}})
    .then(res => {
      console.log("Logged in ",res)
      localStorage.setItem("jwt", res.data.jwt)
    })
    .catch(err => {
      console.log("Error ", err)
    })
    this.props.history.push('/')
  }
  getUser(admin) {
    let token = "Bearer " + localStorage.getItem("jwt")
    let url = "http://localhost:3000/profile"
    axios.get(url, { params:{}, headers: { 'Authorization': token } })
    .then(res => {
      this.setState({userReceived: res.data})
      console.log(res);
    })
    .catch(console.warn())
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
      return (
        <div className="App">
          <form>
            <label htmlFor="email">Email: </label>
            <br />
            <input onChange={this.handleChange}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
            />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            </form>
            <br />
            <button className="pressbutton" onClick={this.login}>Login</button>
          <br />
        </div>
      );
    }
  }
export default Login;