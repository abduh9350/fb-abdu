import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
function App() {
  const user = 'bull';
  return (
    <div className="App">
      {!user ? <h1>Login</h1> : (
      <>
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Feed />
          <Widgets />
  
        </div>
      </>
      )}
      
    </div>
  );
}

export default App;
