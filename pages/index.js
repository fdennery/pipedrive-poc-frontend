import { useContext, useEffect, useState } from 'react';
import Home from '../components/Home';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

function Index() {
  const router = useRouter()
  const { user } = useContext(AuthContext)

  console.log('index', user)


  useEffect(() => {
    console.log(user)
    if (!user.pipedriveUser)  {
      router.push('/login')
    } else {
      router.push('/home')
    }
  },[user, router])




  return <div> ... Loading</div> ;
}

export default Index;
