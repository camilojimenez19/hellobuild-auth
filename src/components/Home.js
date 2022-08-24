import React, { useState } from 'react'
import { useAuth } from '../context/AuthContex'
import Nav from './Nav';
import { Profile } from './Profile';
import { Repositories } from './Repositories';

export const Home = () => {

  const { user, logout, setIsSignIn } = useAuth();

  const [currentPage, setCurrentPage] = useState('repositories')

  /* Handle for logout user */
  const handleLogout = async () => {
    await logout();
    setIsSignIn(false);
  }
  return (
    <div className="w-100">    
      {/* Navigarion  */}
      <Nav logout={handleLogout} setCurrentPage={setCurrentPage}/>

      {currentPage === "repositories" ? <Repositories /> : <Profile />}
      
    </div>
  )
}