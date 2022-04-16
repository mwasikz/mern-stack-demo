import React, { useState } from 'react';
import signupImg from '../assets/signup.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WorkIcon from '@mui/icons-material/Work';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';



const SignUp = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    })

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,
                email, 
                phone, 
                work, 
                password, 
                cpassword
            })
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Registration Error");
            console.log("Registration Error");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            navigate('/signin');
        }
    }


  return (
    <>
       <section className='signup'>
          <div className='sign-up-container'>
              <div className='signup-content'>
                  <div className='signup-form'>
                      <h2 className='form-title'>Sign Up</h2>
                      <form method='POST' className='register-form' id='register-form'>
                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircleIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="name" name='name' autoComplete='off' label="Enter Name" variant="standard" 
                                    value={user.name}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>

                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField type='email' id="email" name='email' autoComplete='off' label="Enter Email" variant="standard" 
                                    value={user.email}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>
                        
                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <PhoneIphoneIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField type='number' id="phone" name='phone' autoComplete='off' label="Enter Phone Number" variant="standard" 
                                    value={user.phone}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>

                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <WorkIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="work" name='work' autoComplete='off' label="Enter Your Profession" variant="standard" 
                                    value={user.work}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>

                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <VpnKeyIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField type='password' id="password" name='password' autoComplete='off' label="Enter Password" variant="standard" 
                                    value={user.password}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>

                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <VpnKeyIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField type='password' id="cpassword" name='cpassword' autoComplete='off' label="Confirm Password" variant="standard" 
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                />
                            </Box>
                        </div>

                        <div className='form-group form-button signUpBtn'>
                            <Button 
                                type='submit' 
                                name='signup' 
                                id='signup' 
                                variant="contained"
                                value='signup'
                                onClick={PostData}
                            >
                              Sign Up
                            </Button>
                            <NavLink className='already-member-link' to='/signin'>Already a member?</NavLink>
                        </div>
                        
                      </form>

                  </div>
                  <figure>
                  <img className='signupImg' src={signupImg} alt='Sign Up' width={450} height={450}/>
                  
                  </figure>
                  
              </div>
              
          </div>
          
       </section>
    </>
  )
}

export default SignUp;