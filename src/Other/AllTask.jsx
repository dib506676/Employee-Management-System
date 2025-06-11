import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
    const authData = useContext(AuthContext)
    console.log(authData)
    return (
        <div className='p-3 sm:p-4 lg:p-5 rounded mt-3 sm:mt-4 lg:mt-5 bg-[#1c1c1c] min-h-[200px] sm:min-h-[240px] lg:h-60'>
            <div className='grid grid-cols-5 gap-2 mb-2 bg-red-400 py-2 px-2 sm:px-4 rounded text-center'>
                <h2 className='text-xs sm:text-sm lg:text-base text-red-600 font-medium'>Employee</h2>
                <h3 className='text-xs sm:text-sm lg:text-base text-yellow-400 font-medium'>New</h3>
                <h5 className='text-xs sm:text-sm lg:text-base text-blue-600 font-medium'>Active</h5>
                <h5 className='text-xs sm:text-sm lg:text-base text-green-600 font-medium'>Completed</h5>
                <h5 className='text-xs sm:text-sm lg:text-base text-red-600 font-medium'>Failed</h5>
            </div>
            <div className='h-[calc(100%-3rem)] overflow-auto'>
            {authData.employees.map((elem,idx)=>{
                return <div className='grid grid-cols-5 gap-2 mb-2 border-emerald-500 border-2 py-2 px-2 sm:px-4 rounded text-center' key={idx}>
                <h2 className='text-xs sm:text-sm lg:text-lg font-medium text-red-600 truncate' title={elem.first_name}>{elem.first_name}</h2>
                <h3 className='text-xs sm:text-sm lg:text-lg font-medium text-yellow-400'>{elem.task_counts.newTask}</h3>
                <h5 className='text-xs sm:text-sm lg:text-lg font-medium text-blue-600'>{elem.task_counts.active}</h5>
                <h5 className='text-xs sm:text-sm lg:text-lg font-medium text-green-600'>{elem.task_counts.completed}</h5>
                <h5 className='text-xs sm:text-sm lg:text-lg font-medium text-red-600'>{elem.task_counts.failed}</h5>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllTask
