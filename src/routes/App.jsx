import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../assets/styles/App.scss';
import Movies from '../containers/Movies';
import Favorites from '../containers/Favorites';
import Layout from '../components/Layout';

const App =() => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path = "/favorites" component={Favorites}/>
        <Route exact path = "/" component={Movies}/>
      </Switch>
    </Layout>
  </BrowserRouter>
  );
  
  export default App;