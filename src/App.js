import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";

import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Customer/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Customer/Checkout/Checkout";
import About from "./components/Company/About/About";
import Services from "./components/Company/Services/Services";
import Projects from "./components/Company/Projects/Projects";
import Contact from "./components/Company/Contact/Contact";


//app related
export const UserContext = createContext();
export const CheckoutContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [checkoutService, setCheckoutService] = useState('');


  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CheckoutContext.Provider value={[checkoutService, setCheckoutService]}>

          <Router>
            <Header user={loggedInUser}></Header>
            <Switch>

              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/projects'>
                <Projects></Projects>
              </Route>
              <Route path='/contact'>
                <Contact></Contact>
              </Route>          
              {/* private route */}
              <PrivateRoute path='/checkout'>
                <Checkout></Checkout>
              </PrivateRoute>
              <PrivateRoute path='/orders'>
                <Orders></Orders>
              </PrivateRoute>
              <PrivateRoute path='/admin'>
                <Admin></Admin>
              </PrivateRoute>

              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='*'>
                <NotFound></NotFound>
              </Route>

            </Switch>
            <Footer></Footer>
          </Router>

        </CheckoutContext.Provider>
      </UserContext.Provider>
    </>



  );
}

export default App;
