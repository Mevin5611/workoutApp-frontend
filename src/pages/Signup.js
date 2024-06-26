import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = ()=>{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const {signup,isLoading,error} = useSignup()
    const hadlesubmit=async(e)=>{
        e.preventDefault()
        await signup(email,password)
    }

    return(
        <form className='signup' onSubmit={hadlesubmit}>
            <h3 className='text-[18px] font-bold pb-3'>Create Admin</h3>

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
            <button disabled={isLoading}>Create</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Signup