import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
    const authData = useContext(AuthContext)
    console.log(authData)
    return (
        <div className='p-5 rounded mt-5 bg-[#1c1c1c] h-60'>
            <div className='flex mb-2 bg-red-400 py-2 px-4 justify-between rounded'>
                <h2 className='w-1/5 text-red-600'>Employee Name</h2>
                <h3 className='w-1/5 text-yellow-400'>New Task</h3>
                <h5 className='w-1/5 text-blue-600'>Active Task</h5>
                <h5 className='w-1/5 text-green-600'>Completed</h5>
                <h5 className='w-1/5 text-red-600'>Failed</h5>
                </div>
            <div className='h-[80%] overflow-auto'>
            {authData.employees.map((elem,idx)=>{
                return <div className='flex mb-2 border-emerald-500 border-2 py-2 px-4 justify-between rounded' key={idx}>
                <h2 className='text-lg font-medium w-1/5 text-red-600'>{elem.first_name}</h2>
                <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.task_counts.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-blue-600'>{elem.task_counts.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.task_counts.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.task_counts.failed}</h5>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllTask
