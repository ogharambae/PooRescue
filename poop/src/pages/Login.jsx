import React from 'react';
import { motion} from 'framer-motion';

function Login() {

  return (
    <>
      <div className='loginContainer'>
        <div className='loginLogoContainer'>
        <motion.div transition={{duration: 2, repeat: Infinity }}
        animate={{ y: [0, 30, 0] }} >
          <img src='./poop.png' />
        </motion.div>
        </div>
        <div className='credentialsContainer'>
          <form>
            <label>
              <input type="text" placeholder="Email"/>
            </label>
            <label>
              <input type="password" placeholder="Password"/>
            </label>
          </form>
        </div>
        <div className='infoContainer'>
          <button className='getStarted'>Sign In</button>
          <a>Don't have an account? <span style={{textDecoration: 'underline'}}>Sign Up</span></a>
        </div>

      </div>
    </>
  );
}

export default Login;