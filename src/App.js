import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './comp/navbar';
import Home from './comp/home';
import Subnavbar from './comp/subnavbar';
import Checkout from './comp/checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInButton from './comp/signInButton'
import LogInButton from './comp/logInButton'
import Appliances from './comp/category/appliances'
import BeautyAndMore from './comp/category/BeautyAndMore'
import Fashion from './comp/category/Fashion'
import Grocery from './comp/category/Grocery'
import HomeItem from './comp/category/HomeItem'
import Mobiles from './comp/category/Mobiles'
import Topoffers from './comp/category/Topoffers'
import Travel from './comp/category/Travel'
function App() {
  return (
    <>
      <Navbar />
      <Subnavbar />
      
      <Switch>
   
        <Router path='/homeitem'>
          <HomeItem />
        </Router>
        <Router path='/mobiles'>
          <Mobiles />
        </Router>
        <Router path='/topoffers'>
          <Topoffers />
        </Router>
        <Router path='/travel'>
          <Travel />
        </Router>
      <Router path='/grocery'>
          <Grocery />
        </Router>
 
      <Router path='/fashion'>
          <Fashion />
        </Router>
        <Router path='/appliances'>
          <Appliances />
        </Router>
        <Router path='/signin'>
          <SignInButton />
        </Router>
        <Router path='/loginpage'>
          <LogInButton />
        </Router>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>

  );
}

export default App;
