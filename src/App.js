import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStatevalue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{user},dispatch]=useStatevalue();
  return (
    <div className="app">
      {!user ? (<Login/>) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>)}



    </div>
  );
}

export default App;
