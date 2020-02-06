import React from "react"

class NoteSubmit extends React.Component {
  state = {
      message: ""
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.message)
    }
    handleChange = (event) => {
      this.setState({message: event.target.value})
    }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input><br/>
        <input type="submit" value="submit message"></input>
      </form>
    )
  }

}

export default NoteSubmit
