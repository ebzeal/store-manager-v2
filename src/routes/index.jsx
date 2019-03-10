import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomepageLayout from '../Components/View/LandingPage/LandingPage';
import AuthRoute from '../Components/Container/ProtectedRoute/ProtectedRoute';
import Dashboard from '../Components/Container/Dashboard/Dashboard';
import ProductsPage from '../Components/Container/Products/AllProducts/Products';
import CategoriesPage from '../Components/Container/Categories/AllCategories/Categories';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomepageLayout} exact />
      <AuthRoute path="/dashboard" component={Dashboard} exact />
      <AuthRoute path="/products" component={ProductsPage} exact />
      <AuthRoute path="/categories" component={CategoriesPage} exact />
    </Switch>
  </Router>
);

export default Routes;
