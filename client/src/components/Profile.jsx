import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/signin');
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