import React from 'react';
import {GithubSearcher} from "./components";
import {BrowserRouter} from "react-router-dom";
import './App.scss'

export const App = () => {
    return (
      <BrowserRouter>
        <div className="App" >
            <GithubSearcher />
        </div>
      </BrowserRouter>
  );
}

