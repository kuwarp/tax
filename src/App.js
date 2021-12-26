import React from 'react'
import logo from './logo.svg';
import './css/props.css'
import './css/App.css';

// Screens

import Header from "./screens/header";
import sidebar from "./screens/sidebar"

function App() {
  return (
    <div className="App flex">
       <Sidebar />      
    </div>
  );
}

export default App;
