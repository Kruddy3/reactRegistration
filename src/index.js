import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { connect } from 'react-redux'

class SecondReader extends React.Component {
  constructor(props) {
    super(props);
    {console.log(props)}
  }
  render(){
    return(
      <h1>hello</h1>
    )
  }
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
  [<Input />,
  <SecondReader />]
)

ReactDOM.render(
  element,
  document.getElementById('root')
);





const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1 
export default connect(mapStateToProps)(Input)
