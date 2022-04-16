import React, { useEffect } from 'react';

const Profile = () => {

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile')
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callProfilePage();
  }, []);


  return (
    <div>
        <p>WELCOME</p>
        <h1>This is Profile Page</h1>
    </div>
  )
}

export default Profile;