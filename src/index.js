import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user){
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Kevin',
  lastName: "Ruddy"
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstName: "kevin"}
  }

  render(){
    return(
      <h1>{this.state.firstName}</h1>
    )
  }
}



const element = (
  [<Input />,
  <Input />]
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
