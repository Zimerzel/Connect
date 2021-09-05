import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import './App.css';
//Main components
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
//Sub components
import Community from "./components/aboutComponents/Community";
import Team from "./components/aboutComponents/Team";
import Contact from "./components/aboutComponents/Contact";


function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/learn' component={Learn} />
        <Route exact path='/about/Our-Community' component={Community} />
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
