import React from 'react'
import { useAuth } from '../context/AuthContex'

export const Profile = () => {

  const { user } = useAuth();
  const { displayName, photoURL, email } = user;
  let imageUrl = photoURL;

  console.log(user)

  if(!photoURL){
    const [username] = email.split('@');
    imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}`
  }


  return (
    <div className="container mt-5">
      <h1 className="mb-4"> Profile </h1>

      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className='w-25 mx-auto'>
                <img src={imageUrl} alt="avatar"
                  className="rounded-circle img-fluid" />
              </div>
              <h5 className="my-3">{displayName}</h5>
              <p className="text-muted mb-1">{email}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
