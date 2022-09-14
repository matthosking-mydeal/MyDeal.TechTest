import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App"> 
        <AppHeader className="App-header"/>
        <AppFooter />   
    </div>
  );
}

export default App;