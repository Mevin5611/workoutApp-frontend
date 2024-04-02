import React from 'react'
import {useWorkoutContext} from '../hooks/useWOrkoutContext'
import {format} from  'timeago.js'
import { useAuthContext } from '../hooks/useAuthContext'


function WorkoutDetails({Workout}) {
  const timestamp = Workout.createdAt ? new Date(Workout.createdAt) : ''

const {dispatch} =useWorkoutContext()
const {user}=useAuthContext()
  const handleClick = async()=>{
    const response = await fetch('https://workout-app-backend-dun.vercel.app/api/workouts/'+Workout._id,{
      method :'DELETE',
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload :json})

    }
  }
  return (
    <div className="workout-details">
        <h4 className='text-[18px] font-bold pb-3'>{Workout.title}</h4>
        <p><strong>Reps :</strong>{Workout.reps}</p>
        <p><strong>Load :</strong>{Workout.load}</p>
        <p>{format(Workout.createdAt)}</p>
        <div className='flex justify-end'>
        <button className= "bg-red-100 p-1 rounded-md text-red-600" onClick={handleClick}>delete</button>
        </div>
    </div>
  )
}

export default WorkoutDetails