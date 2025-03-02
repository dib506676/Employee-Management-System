import React from 'react'

function TaskListNumber({data}) {
    return (
        <div className='mt-10 flex justify-between gap-5 screen'>
            <div className=' rounded-xl py-4 px-4 w-[45%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.task_counts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className=' rounded-xl py-4 px-4 w-[45%] bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.task_counts.completed}</h2>
                <h3 className='text-xl font-medium'>completed Task</h3>
            </div>
            <div className=' rounded-xl py-4 px-4 w-[45%] bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.task_counts.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className=' rounded-xl py-4 px-4 w-[45%] bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.task_counts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
