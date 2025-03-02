import React, { useState } from "react";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDiscription, setTaskDiscription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [cotegory, setCotegory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDiscription,
      taskDate,
      cotegory,
      assignTo,
      active: false,
      new_task: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((element) => {
      if (assignTo == element.first_name) {
        console.log(element.tasks);
        element.tasks.push(newTask);
        console.log(element.tasks);
      }
    });
    localStorage.setItem('employees',JSON.stringify(data))
    setTaskTitle("");
    setTaskDate("");
    setTaskDiscription("");
    setAssignTo("");
    setCotegory("");
  };

  return (
    <div className="bg-[#1c1c1c] mt-7 rounded p-5">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start w-full justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="make a ui design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              onChange={(e) => setTaskDate(e.target.value)}
              value={taskDate}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              onChange={(e) => setAssignTo(e.target.value)}
              value={assignTo}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Cotegory</h3>
            <input
              onChange={(e) => setCotegory(e.target.value)}
              value={cotegory}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design dev etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            onChange={(e) => setTaskDiscription(e.target.value)}
            value={taskDiscription}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            cols={30}
            rows={10}
            id=""
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded-lg text-sm mt-4 w-full">
            create task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
