import './App.css';
import React, {useState, useEffect} from 'react';
import router from './Router';
import {
  RouterProvider
} from "react-router-dom";
import Layout from './component/layout/Layout';

function App() {
  const pathname =window.location.pathname;
  const [navvisible, setNavvisible] = useState(false);
  useEffect(() => {
  if(pathname == '/' || pathname == '/home'){
    setNavvisible(true);
  }
}, []);
  return (
  
    <div>
      <Layout usenav = {navvisible}>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
