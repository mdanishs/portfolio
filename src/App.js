import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom"

import LeftPane from "./LeftPane/LeftPane"
import RightPane from "./RightPane/RightPane"

import * as store from "./data_store/DataStore";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <div className="left-pane col-md-4">
          <div className="affix left-pane-fixed">
            <LeftPane store={store}/>
          </div>
        </div>
        <div className="col-md-8">
          <RightPane store={store}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
