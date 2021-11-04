import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import './index.css';
//Main components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tiny from "./components/Tiny";
import Learn from "./components/Learn";
//About Tabs
import Community from "./components/aboutComponents/Community";
import Contact from "./components/aboutComponents/Contact";
//Learn Tabs
import Books from "./components/learnComponents/Books";
import Videos from "./components/learnComponents/Videos"

//Icons






function App() {
  return (
    <Router>
    <>
      <Header />
      <Navbar fixed="top"/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tiny' component={Tiny} />
        <Route exact path='/community' component={Community} />
        <Route exact path='/about/contact' component={Contact} />
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
