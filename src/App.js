import React from 'react';
import './App.css';
import About from './About';
import Gallery from './Gallery';
import Nav from './Nav';
import Contact from './Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> {/* Router wraps the entire component and is the magic that renders the
     component instead of having the browser go back to the server to find the component */}
    <div className="App">
      <Nav />
      <Switch>
        {/* The Switch tag that we imported helps the components switch properly without rendering
        multiple components.  */}
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />  
        <Route path="/contact" component={Contact} />
      {/* The Route defines the route... by using the "/" on the home page component, the browser reads the URL exacly. */}
      </Switch> 
    </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1> I'm a home page component</h1>
  </div>
);

export default App;