import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Produce from './components/produce/ProducePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage/Home';
import Account from './components/Account';
import Farms from './components/farmcomponents/Farms';
import SingleFarm from './components/farmcomponents/SingleFarm';
import IdProduct from './components/produce/IdProductPage';
import Checkout from './components/checkout/Checkout';
import Help from './components/Help';
import Signup from './components/Signup';
import Confirmation from './components/checkout/Confirmation'
import CommunityPage from './components/community/CommunityPage'

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produce" component={Produce} />
          <Route exact path="/produce/:id" component={IdProduct} />
          <Route exact path="/farms" component={Farms} />
          <Route exact path="/farms/:id" component={SingleFarm} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/confirm/:id" component={Confirmation} />
          <Route exact path="/community" component={CommunityPage} />
        </Switch>
      </AppContextProvider>
    </Router>
  );
};

export default App;
