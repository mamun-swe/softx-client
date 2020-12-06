import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'

// import StudentMaster from './pages/student/Master'
import LibrarianMaster from './pages/librarian/Master'
import PrivateRoute from './components/PrivateRoute/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />

          <PrivateRoute>
            {/* <Route path="/student" component={StudentMaster} /> */}
            <Route path="/librarian" component={LibrarianMaster} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
