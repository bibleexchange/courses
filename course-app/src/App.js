import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Course from './Components/Course'
import Lesson from './Components/Lesson'

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

      <Route exact path='/course/:courseId/:sectionId/:lessonId' render={(props => (
        <Lesson {...this.props} router={props}/>
      ))}/>

		</Switch>
        <header className="App-header">
          <h1 className="App-title">From the Bible exchange Courses Repository</h1>
        </header>
      </div>
    );
  }
}

export default App;