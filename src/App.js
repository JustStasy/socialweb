import React from 'react';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom';
import HeaderContainer from './components/Header/headerContainer';

function App() {
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="App-wrapper-content">
        <Outlet />
      </div>
    </div>
  );
}


export default App;
