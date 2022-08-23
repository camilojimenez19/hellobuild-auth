import React from 'react'
import { useAuth } from '../context/AuthContex'

export const Home = () => {

  const { user, logout, setIsSignIn } = useAuth();

  /* Handle for logout user */
  const handleLogout = async () => {
    await logout();
    setIsSignIn(false);
  }
  return (
    <div>
      <h1>Welcome, user</h1>
      <p>{ JSON.stringify(user, null, 3)}</p>

      <button onClick={handleLogout}>logout</button>
    </div>
  )
}