import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
     <h1>Hello Clever Programmer...Let's build the Slack Clone🚀</h1>
     {/* Header */}
     <Header />
     <div className='app_body'>
        <Sidebar />
        {/* React-Router -> Chat screen */}
     </div>
  
    </div>
  );
}

export default App;
