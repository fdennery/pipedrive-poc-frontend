import styles from '../styles/Home.module.css';

import  Link  from 'next/link'
import { useContext, useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';


function Login() {

const router = useRouter()


const { user }  = useContext(AuthContext)

console.log('login', user)

useEffect(() => {
  if (user.pipedriveUser){
    router.push('/home')
  }
},[router, user])

const handleLoginPipedrive = () => {
  router.push('http://localhost:3000/auth/pipedrive')
}
  
  return (
    <div className={styles.container}>
      <h1> Welcome, first connect  to your pipedrive account </h1>
    <button className={styles.button} onClick={() => handleLoginPipedrive()}> Login to Pipedrive</button>
    </div>
  );
}

export default Login;