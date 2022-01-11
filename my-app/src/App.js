import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Advertise from "./components/Advertise.js/Advertise";
import Checkout from "./components/Cart/Cart";
import SignIn from "./components/Account/SignIn";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Account/SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
       
          <div>
            <Switch>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/products/:search">
                {" "}
                {/* after the colon give same name  as you given in useparam */}
                <Product />
              </Route>

              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/SignIn">
                <SignIn />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/About">
                <About />
              </Route>
              <Route path="/">
                <Slider />
                <Advertise />
              </Route>
            </Switch>
          </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
