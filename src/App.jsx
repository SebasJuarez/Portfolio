import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/Proyects/Proyects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/sobre-mí" component={About} />
          <Route path="/mi-trabajo" component={Portfolio} />
          <Route path="/contacto" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
