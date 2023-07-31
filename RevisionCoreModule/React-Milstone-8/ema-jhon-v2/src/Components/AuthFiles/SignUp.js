import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error

    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user
                updateProfile({ displayName: name })
                console.log(user)
            })


    }
    let ErrorMas
    if (error) {
        ErrorMas = <p> {error.message}</p>
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
        <div className='form-container'>
            <h2 style={{ textAlign: 'center' }}>Please Register !!</h2>

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
                <p>Already have account? <Link to="/Login">Login</Link></p>
                <div className='input-field'>

                    <input onClick={handleSubmit} className='submit-btn' type='submit' value='Register' />
                </div>

                {/* <div>
                <button className='google-btn' onClick={() => signInWithGoogle().then(()=>{navigate(from,{replace:true})})} > Google</button>
                </div> */}
            </form>


        </div>

    </div>
    );
};

export default SignUp;