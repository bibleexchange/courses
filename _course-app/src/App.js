import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Course from './Components/Course'
import Task from './Components/Task'

class App extends Component {

  render() {

    return (
      <div className="App">

		<Switch>
		  <Route exact path='/' render={(props => (
        <Home {...props}/>
      ))}/>

      <Route exact path='/course/:courseId' render={(props => (
        <Course {...this.props} router={props} />
      ))}/>

      <Route exact path='/course/:courseId/:taskId' render={(props => (
        <Task {...this.props} router={props}/>
      ))}/>

		</Switch>
        <header className="App-header">
         <h1 className="App-title"><Link to={"/"}>From the Bible exchange Courses Repository</Link></h1>
        </header>
      </div>
    );
  }
}

export default App;