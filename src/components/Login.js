import React,{useState} from 'react'
import {Link,useHistory,Redirect} from 'react-router-dom'
import '../styles/login.css'
import {auth} from '../firebase/firebase'

function Login({user}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))

    }

    const register = (e) => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            // /console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    
    return (
        <>
        {
            user ?  <Redirect to='/' />
            :<div className="login">
                <Link to='/'>
                    <img alt="amazon_logo" className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" />
                </Link>
                <div className="login_container">
                    <h1>Login</h1>
                    <div className="login_form">
                        <form>
                            <input className="login_input" type="email" placeholder="email" value={email} onChange={handleEmailChange} required/>
                            <input className="login_input" type="password" placeholder="password" value={password} onChange={handlePasswordChange} required />
                            <button type="submit" onClick={signIn}>Sign In</button>
                        </form>
                    </div>
                    <p>By continuing, you agree to Amazon-clone's condition of use and privacy notice</p>
                    <button onClick={register}>create your Amazon Account</button>
                </div>
            </div>
        }
        </>
    )
}

export default Login
