import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
import Register from "./components/admin/Register"
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./components/public/Stripe";
import Form from "./components/public/Form";
import Contact from "./components/public/Contact";

import "./scss/app";
//import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/shared/Navbar";
import AllBooks from "./components/public/AllBooks";
import SingleBook from "./components/public/SingleBook";
import Home from "./components/public/Home";
import Donate from "./components/public/Donate";

export default class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
        </>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={AllBooks} />
          <Route exact path="/single/:id" component={SingleBook} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

interface IAppProps {}
interface IAppState {}
