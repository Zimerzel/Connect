import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import Home from "./components/Home";
import About from "./components/About";
import Connect from "./components/aboutComponents/Connect";
import Team from "./components/aboutComponents/Team";
import Contact from "./components/aboutComponents/Contact";
import './App.css';

function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/about/why-connect' component={Connect} />
        <Route exact path='/about/Our-Team' component={Team} />
        <Route exact path='/about/Contact' component={Contact} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      <Footer />
    </>
    </Router>

  );
}

export default App;
