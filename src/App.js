import React, { useState, useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sibebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Wedgets';
import Login from './components/Login/Login';
import { StateContext } from './context';

function App() {
  const [{ user }, dispatch] = useContext(StateContext);

  return (
    user ?
      (<div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>) :
      <Login />
  );
}

export default App;
