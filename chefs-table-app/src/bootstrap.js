import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./store/reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";
import Layout from './components/layout'
import history from './history';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Account from './components/account/account';
import e-Restaurant from './components/e-restaurant';
import Review from './components/order/review';
import Shipping from './components/information/shipping';
import Payment from './components/information/payment';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
              <Route path='/' exact component={Signin}/>
              <Route path='/signin' exact component={Signin}/>
              <Route path='/signup' exact component={Signup}/>

              <Route path='/account' exact component={Account}/>

              <Route path='/e-restaurant' exact component={e-Restaurant}/>
              <Route path='/order/review' exact component={Review}/>

              <Route path='/information/email' exact component={Email}/>
              <Route path='/information/pay' exact component={Pay}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
