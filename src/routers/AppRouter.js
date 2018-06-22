import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage'
import ContactPage from '../components/ContactPage'
import PortfolioItemPage from '../components/PortfolioItemPage'
import PortfolioPage from '../components/PortfolioPage'

import Header from '../components/Header'
import HomePage from '../components/HomePage';



const AppRouter = () => (
  <BrowserRouter> 
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contactus" component={ContactPage}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;