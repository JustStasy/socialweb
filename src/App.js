import React from 'react';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/MyPosts/MyPosts';


function App() {
  return (
    <div className="App-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}


export default App;
