import React from 'react';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App-wrapper">
      <Header />
      <NavBar />
      <div className="App-wrapper-content">
        <Profile />
      </div>
    </div>
  );
}


export default App;
