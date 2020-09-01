import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (<Login />) : (
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
