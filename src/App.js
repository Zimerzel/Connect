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

//Sustainable Life
import SustainableLife from "./components/Sustainable-Life"
import StayHome from "./components/sustainabilityComp/StayHome";
import Consumption from "./components/sustainabilityComp/Consumption";
import Videogames from "./components/sustainabilityComp/VideoGames";
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
        <Route exact path='/sustainable-life' component={SustainableLife} />
        <Route exact path='/sustainable-life/stay-home' component={StayHome} />
        <Route exact path='/sustainable-life/consumption' component={Consumption} />
        <Route exact path='/sustainable-life/video-games' component={Videogames} />
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
