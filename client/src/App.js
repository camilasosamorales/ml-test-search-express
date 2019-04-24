import React, { Component } from 'react';
import './App.css';


import { BrowserRouter, Route } from 'react-router-dom';

import SearchBox from './containers/Home/SearchBox';
import SearchResultsContainer from './containers/searchResults/SearchResultsContainer';
import ResultsComponent from './containers/product/ProductPage';

class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>
          <Route path="/" component={SearchBox}></Route>
          <Route exact path="/items" component={SearchResultsContainer}></Route>
          <Route exact path="/items/:id" component={ResultsComponent}></Route>
        </BrowserRouter>
      </div>


    );
  }
}

export default App;
