import React from 'react';
import Menu from './components/Menu';
import './App.css';


function App() {
  return (
    <div className="container">
      <Menu />
      <footer className="bg-secondary col-md-12 text-center text-white">
        Copyright &copy; 2020
      </footer> 
    </div>
  );
}

export default App;
