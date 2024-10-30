import Navigation from '../Navigation'
import Footer from '../footer/Footer'
import UserView from './UserView';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

function UserPage() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // Parse user data from local storage
    if (!user) {
      localStorage.setItem('preroute', location.pathname); // Save the current pathname as the preroute
      navigate('/login'); // Redirect to login page if user is not logged in
    }
  }, [navigate, location.pathname]); // Depend on navigate and location.pathname

  // If user is not found, return null to prevent rendering the rest of the component
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return null;
  
  return (
    <div>
      <Navigation/>
        <UserView user = {user}/>
      <Footer/>
    </div>
  )
}

export default UserPage
