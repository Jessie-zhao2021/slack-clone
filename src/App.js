import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />            
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path='/' element={<h1>Welcome</h1>} />
              </Routes>           
            </div>
          </>
        )}
       
     </Router>
    </div>
  );
}

export default App;
