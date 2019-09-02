import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Course from './Components/Course'
import Task from './Components/Task'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>

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

    <Footer/>

      </div>
    );
  }
}

export default App;