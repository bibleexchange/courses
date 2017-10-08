import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
class App extends Component {
  render() {
	  console.log(this.props.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Bible exchange Courses Repository</h1>
        </header>		

		<Switch>
		  <Route exact path='/' component={Home}/>

		</Switch>

      </div>
    );
  }
}

export default App;

//		  <Route path='/roster' component={Roster}/>
//		  <Route path='/schedule' component={Schedule}/>