import React from 'react'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'

function Navbar() {
  const {logout}=useLogout()
  const {user}=useAuthContext()
  const handleClick=()=>{
    logout()
  }
  return (
    <header>
        <div className="bg-white flex justify-between items-center h-[100px] ">
            <Link to= '/'>
                <h1 className='font-[700] text-[25px] ps-3 md:text-[35px] '>Workout Buddy</h1>
                {
                  user && (
                    <span className='ps-3 font-thin'>{user.email}</span>
                  )
                }
            </Link>
            <nav>
              {user && (<div>
                
                <button className=' border-2 border-emerald-500 rounded-md p-1 font-semibold mr-3' onClick={handleClick}>Log out</button>
                
              </div>)}
              {!user && (<div>
              <Link className='mr-2' to= '/login'>Login</Link>
              <button className='border-l-2 border-black rounded-sm p-1 font-semibold mr-2'><Link to= '/signup'>Create</Link></button>
              </div>)}
            </nav>
        </div>
    </header>
  )
}

export default Navbar