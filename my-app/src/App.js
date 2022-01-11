
import './App.css';
import Navbar  from './components/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import Advertise from './components/Advertise.js/Advertise';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
            <Router>
              <div className="app">
              <Switch>
                <Route path="/checkout">
                  <Navbar />
                  <Checkout />
                </Route>
                <Route path="/">
                  <Navbar />
                  <Slider />
                  <Advertise />   
                </Route>
              </Switch>

              {/* <Switch>
                <Route path="/">
                  <Navbar />
                  <Slider />
                   <Advertise />   
                </Route>
              </Switch>
            
              <Switch>
                <Route path="/products">
                  <Product/> 

                </Route>
              </Switch>
              <Switch>
                <Route path="/Account">
                  <h1>Account</h1>
                </Route>
              </Switch>
              <Switch>
                <Route path="/contact">
                  <h1>contact</h1>
                </Route>
              </Switch>
              <Switch>
                <Route path="/About">
                  <h1>About</h1>
                </Route>
              </Switch> */}
            </div>
            <Footer/>
            </Router>
           
        
      
   
      



     
   
  );
}

export default App;
