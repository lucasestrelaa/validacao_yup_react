import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  return (
    <div className="App" >
      <div className='parent container d-flex justify-content-center align-items-center w-100 h-100' style={{ width: "600px" }}>
        <Form/>
      </div>
    </div>
  );
}

export default App;
