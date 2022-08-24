import React, { useState } from 'react'
import { useAuth } from '../context/AuthContex'
import Nav from './Nav';
import { Profile } from './Profile';
import { Repositories } from './Repositories';

export const Home = () => { 

  const [currentPage, setCurrentPage] = useState('repositories'); 

  return (
    <div className="w-100">    
      {/* Navigarion  */}
      <Nav setCurrentPage={setCurrentPage}/>

      {/* Main content */}
      {currentPage === "repositories" ? <Repositories /> : <Profile />}
      
    </div>
  )
}