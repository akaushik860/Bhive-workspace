import React from 'react';
import logo from './logo.svg';
import './App.css';
import InsideBody from './Components/InsideBody';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';

function App() {
  return (
    <div className="">
      <TopBar></TopBar>
      <InsideBody></InsideBody>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
