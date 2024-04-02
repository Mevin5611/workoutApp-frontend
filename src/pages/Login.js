import {useState} from 'react'
import {useLogin} from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login = ()=>{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const {login,isLoading,error} = useLogin()
    const hadlesubmit=async(e)=>{
        e.preventDefault()

        await login(email,password);
    }

    return(
        <form className='login' onSubmit={hadlesubmit}>
            <h3 className='text-[18px] font-bold pb-3'>Login</h3>

            <label>Email:</label>
            <input 
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            />
            <label>Password:</label>
            <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            />
            <button disabled={isLoading}>Log in</button>
            <p className='pt-3'>don't have an Account <Link className='text-blue-500' to='/signup'>Register</Link></p>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login