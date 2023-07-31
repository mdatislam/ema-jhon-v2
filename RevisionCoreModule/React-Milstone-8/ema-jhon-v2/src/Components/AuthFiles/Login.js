import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    //const [user]=useAuthState(auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading, error

    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const from = location?.state?.from?.pathname || '/About'


    const handleSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })



    }
    let ErrorMas
    if (error) {
        ErrorMas = <p> {error.message}</p>

    }
    if (loading || gLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className='form-container'>
                <h2 style={{ textAlign: 'center' }}>Please Login !!</h2>

                <form>
                    <div className='input-field'>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleEmail} type='email' placeholder='email' />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="password">Password</label>
                        <input onChange={handlePassword} type='password' placeholder='password' />
                    </div>
                    <p  style={{color:"red"}}>{ErrorMas}</p>
                    <p>Are you New ? <Link to="/SignUp">signUp</Link></p>
                    <div className='input-field'>

                        <input onClick={handleSubmit} className='submit-btn' type='submit' value='submit' />
                    </div>

                    <div>
                    <button className='google-btn' onClick={() => signInWithGoogle().then(()=>{navigate(from,{replace:true})})} > Google</button>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default Login;