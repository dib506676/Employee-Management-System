import React, { useState } from "react";
import Header from "../../Other/Header";
import CreateTask from "../../Other/CreateTask";
import AllTask from "../../Other/AllTask";

function AdminDashboard(props) {
  const [taskCreated ,setTaskCreated] = useState(false)
  console.log(taskCreated)
  return (
    <div className="min-h-screen w-full p-4 sm:p-5 lg:p-7">
      <Header changeUser = {props.changeUser} data={props.data}/>
      <CreateTask setTask={setTaskCreated}/>
      <AllTask taskCreate={taskCreated}/>
    </div>
  );
}

export default AdminDashboard;
