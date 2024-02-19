import './style.css';
import Header from './components/Header';
import SmallButton from './components/SmallButton';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Prijava from './Prijava';
import Registracija from './Registracija';
import LandingPage from './LandingPage';

function App() {
  const registerUser = async (user) =>{
    const res = await fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })};

  return (
    <Router>
      <Switch>
          <Route path="/Prijava.js" component={Prijava}/>
          <Route path="/Registracija.js" component={Registracija}/>
          <Route path="/" component={LandingPage}/>  
      </Switch>
    </Router>
  );
}

export default App;
