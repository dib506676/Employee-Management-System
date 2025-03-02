import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'

function TaskList({data}) {
    return (
        <div id='taskList' className='overflow-x-auto h-[55%] w-full flex items-center gap-5 flex-nowrap justify-start py-5 px-2] rounded-xl mt-10'>
          {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }else if(elem.new_task){
                return <NewTask key={idx} data={elem}/>
            }else if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }else if(elem.failed){
                return <FaildTask key={idx} data={elem}/>
            }
          })}
        </div>
    )
}

export default TaskList
