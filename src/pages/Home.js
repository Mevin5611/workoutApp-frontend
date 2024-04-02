import React from 'react'
import { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/useWOrkoutContext'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useAuthContext } from '../hooks/useAuthContext'
const Home = () => {

    const { workouts, dispatch } = useWorkoutContext()
    const {user}=useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://workout-app-backend-dun.vercel.app/api/workouts/',{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()


            if (response.ok) {
                dispatch({ type: 'SET_WORKOUT', payload: json })
            }

        }
        if(user){

            fetchWorkouts()
        }

    })
    return (
        <div className="md:grid md:gap-[100px] md:grid-cols-12">
            <div className="workouts md:col-span-8">
                {workouts && workouts.map((Workout) => (
                    <WorkoutDetails Workout={Workout} key={Workout._id} />
                ))}
            </div>
            <div className='col-span-4'> 
            <WorkoutForm />
            </div>
        </div>
    )
}

export default Home