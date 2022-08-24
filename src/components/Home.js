import React, { useState } from 'react'
import { useAuth } from '../context/AuthContex'
import Nav from './Nav';
import { Profile } from './Profile';
import { Repositories } from './Repositories';

export const Home = () => { 

  const [currentPage, setCurrentPage] = useState('repositories'); 

  const [searchInput, setSearchInput] = useState();
  
  const handleOnChangeText = ({ target: { value } }) => {
    setSearchInput(value);
  }

  return (
    <div className="w-100">    
      {/* Navigarion  */}
      <Nav setCurrentPage={setCurrentPage} searchOnChange={handleOnChangeText} search={searchInput}/>

      {/* Main content */}
      {currentPage === "repositories" ? <Repositories search={searchInput} setSearch={setSearchInput} /> : <Profile />}
      
    </div>
  )
}