import React from 'react'
import { useAuth } from '../context/AuthContex'
import Nav from './Nav';

export const Home = () => {

  const { user, logout, setIsSignIn } = useAuth();

  /* Handle for logout user */
  const handleLogout = async () => {
    await logout();
    setIsSignIn(false);
  }
  return (
    <div className="w-full">
      
      <Nav logout={handleLogout}/>
      
    </div>
  )
}