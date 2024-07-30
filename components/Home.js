import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'
import  Link  from 'next/link'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';


function Home() {

const router = useRouter()
const { user }  = useContext(AuthContext)

const[ message , setMessage] = useState('')

console.log('home', user)


useEffect (() => {
  if (!user.pipedriveUser){
    router.push('/login')
  } 

},[user, router])





const handleLoginGoogle = () => {

  router.push('http://localhost:3000/auth/google')

}

let content;
if (!user.googleUser) {



  content = <div className={styles.content2}>
    <h2>Now sign in to Google in order to post a message</h2>

    <button className={styles.buttonG} onClick={() => handleLoginGoogle()}> Login to Google</button>
       </div>

} else {

let googleToken = user.googleUser
let decode = jwtDecode(googleToken.toString())

  content = <div className={styles.content2}>
  <h3>Great your are connected with account {decode?.email}, post your first message </h3>
  <input className={styles.input} onChange={(e) => setMessage(e.target.value)}/>
  <button className={styles.buttonG} onClick={() => handleCreateMessage()}> Post Message</button>
          </div>
}
  
  return (
    <div className={styles.container}>
        <h1 >Welcome {user?.pipedriveUser?.name} from {user?.pipedriveUser?.company_name}</h1>
                {content}
    </div>
  );
}

export default Home;
