import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user){
  return user.firstName + " " + user.lastName;
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password:""}
    this.userInput = this.userInput.bind(this);
    this.passInput = this.passInput.bind(this);
  }

  userInput(event) {
    this.setState({username: event.target.value});
  }
  
  passInput(event){
    this.setState({password: event.target.value});
  }

  render(){
    return(
      <form>
        <label>
          <div>User Name:</div>
          <div>{this.state.username}</div>
          <input type="text" value={this.state.username} onChange={this.userInput} />
        </label>
        <label>
          <div>Password:</div>
          <div>{this.state.password}</div>
          <input type="text" value={this.state.password} onChange={this.passInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}



const element = (
  <Input />
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
