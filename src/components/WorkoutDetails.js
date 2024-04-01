import React from 'react'
import {useWorkoutContext} from '../hooks/useWOrkoutContext'
import {formatDistance} from 'date-fns'
import { useAuthContext } from '../hooks/useAuthContext'


function WorkoutDetails({Workout}) {
  const timestamp = Workout.createdAt ? new Date(Workout.createdAt) : ''

const {dispatch} =useWorkoutContext()
const {user}=useAuthContext()
  const handleClick = async()=>{
    const response = await fetch('api/workouts/'+Workout._id,{
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
        <h4>{Workout.title}</h4>
        <p><strong>Reps :</strong>{Workout.reps}</p>
        <p><strong>Load :</strong>{Workout.load}</p>
        <p>{Workout.createdAt}</p>
        <span className= "material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails