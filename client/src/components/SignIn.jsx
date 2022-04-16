import React, { useState } from 'react';
import signupImg from '../assets/signup.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })

            
        })

        const data = res.json();
        if(res.status === 400 || !data) {
            window.alert('Invalid Credentials');
        } else {
            navigate('/');
        }

    }

  return (
    <>
        <section className='signup'>
          <div className='sign-up-container'>
              <div className='signup-content'>
                  <div className='signup-form'>
                      <h2 className='form-title'>Sign In</h2>
                      <form method='POST' className='register-form' id='register-form'>
                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="email" name='email' autoComplete='off' label="Email" variant="standard" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                        </div>

                        <div className='form-group'>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <VpnKeyIcon fontSize='small' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField type='password' id="password" name='password' autoComplete='off' label="Password" variant="standard" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                        </div>

                        <div className='form-group form-button signUpBtn'>
                            <Button
                                type='submit' 
                                name='signin' 
                                id='signin' 
                                variant="contained"
                                value='Sign In'
                                onClick={signInHandler}
                            >
                                Sign In
                            
                            </Button>
                            <NavLink className='not-member-link' to='/signup'>Not a member?</NavLink>
                        </div>
                 
                      </form>

                  </div>
                  <img className='signupImg' src={signupImg} alt='Sign Up' width={450} height={450}/>
                 
               
              </div>
              
          </div>
          
       </section>
    </>
  )
}

export default SignIn;