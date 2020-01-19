import React from 'react';
import './App.css';
import Students_table from './Components/Students_table/Students_table';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Student from './Components/Student/Student';
import Newstudent from './Components/Newstudent/Newstudent';
import StudentByDay from './Components/StudentByDay/StudentByDay';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <header className="App-header">
          <Route exact path="/students">
        <Students_table></Students_table>
          </Route>
          <Route path= "/newstudent">
        <Newstudent></Newstudent>
          </Route>
          <Route path= "/students/:studentid">
        <Student></Student>
          </Route>
          <Route path= "/statistics">
        <StudentByDay></StudentByDay>
          </Route>
          <Route exact path="/">
            <Welcome></Welcome>
          </Route>
      </header>
    </div>
      </Switch>   
    </Router>
  );
}

export default App;
