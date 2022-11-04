import Navbar from './Navbar';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import SignIn from './SignIn';
import BlogList from './BlogList';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';


const auth = firebase.auth();


const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="header">
          <div className="heading">
            <p >Welcome </p>
            <p className="heading-sm">Create You Post Here</p>
          </div>
        </div>
        <div>
          {user ?
            <Switch>
              <Route path='/' exact component={BlogList} />
              <Route path='/create' exact component={Create} />
              <Route path='*' component={NotFound} />
            </Switch>
            : <SignIn />}
        </div>
      </div>
    </Router>
  );
}

export default App;
