import React from 'react'

function TaskListNumber({data}) {
    return (
        <div className='mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5'>
            <div className='rounded-xl py-3 sm:py-4 px-3 sm:px-4 bg-red-400'>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{data.task_counts.newTask}</h2>
                <h3 className='text-sm sm:text-base lg:text-xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl py-3 sm:py-4 px-3 sm:px-4 bg-blue-400'>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{data.task_counts.completed}</h2>
                <h3 className='text-sm sm:text-base lg:text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='rounded-xl py-3 sm:py-4 px-3 sm:px-4 bg-green-400'>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{data.task_counts.active}</h2>
                <h3 className='text-sm sm:text-base lg:text-xl font-medium'>Active Task</h3>
            </div>
            <div className='rounded-xl py-3 sm:py-4 px-3 sm:px-4 bg-yellow-400'>
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>{data.task_counts.failed}</h2>
                <h3 className='text-sm sm:text-base lg:text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
