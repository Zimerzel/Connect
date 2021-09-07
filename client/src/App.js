import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import './App.css';
//Main components
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
//About Tabs
import Community from "./components/aboutComponents/Community";
import Contact from "./components/aboutComponents/Contact";
//Learn Tabs
import Books from "./components/learnComponents/Books";
import Videos from "./components/learnComponents/Videos"


function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/about/Our-Community' component={Community} />
        <Route exact path='/about/Contact' component={Contact} />
        <Route exact path='/learn' component={Learn} />
        <Route exact path='/learn/books' component={Books} />
        <Route exact path='/learn/videos' component={Videos} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      <Footer />
    </>
    </Router>

  );
}

export default App;
