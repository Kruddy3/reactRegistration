import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


 function counter(state = "hello", action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  case 'TESTING':
    return state + 100
  default:
    return state
  }
}
function testStore(state = "hello", action) {
  switch (action.type) {
  case 'INCREMENTS':
    return state + 1
  case 'DECREMENTS':
    return state - 1
  case 'TESTINGS':
    state = action.text;
    return state
  default:
    return state
  }
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

}
const enhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const defaultState = 0;
let store = createStore(testStore)
let store2 = createStore(counter, defaultState, enhancers)

class SecondReader extends React.Component {
  constructor(props) {
    super(props);
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

    store.subscribe(() =>
      this.setState({username: store.getState()})
    )
    store2.subscribe(() =>
      this.setState({password: store2.getState()})
    )
  }

  userInput(event) {
    store.dispatch({ type: 'TESTINGS', text: event.target.value})

  }

  passInput(event){
    this.setState({password: store2.getState()});
    store2.dispatch({ type: 'TESTING' })

  }

  render(){
    return(
      <form>
        <label>
          <div>User Name:</div>
          <div>{this.state.username}</div>
          <input type="text" value={store.getState()} onChange={this.userInput} />
        </label>
        <label>
          <div>Password:</div>
          <div>{store2.getState()}</div>
          <input type="text" value={store2.getState()} onChange={this.passInput} />
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

store2.subscribe(() => {ReactDOM.render(
  element,
  document.getElementById('root')
)})
