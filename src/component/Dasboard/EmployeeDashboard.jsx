import React from 'react'
import Header from '../../Other/Header'
import TaskListNumber from '../../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
    
    
    
    return (
        <div className='p-4 sm:p-6 lg:p-10 bg-[#1c1c1c] min-h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard
