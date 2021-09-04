import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      <Footer />
    </>
    </Router>

  );
}

export default App;
