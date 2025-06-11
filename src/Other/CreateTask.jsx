import React, { useState } from "react";

function CreateTask() {
  // Form state
  const [formData, setFormData] = useState({
    task_title: "",
    task_description: "",
    task_date: "",
    task_category: "",
    assign_to: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      active: true, // Task is active when created
      new_task: true, // Mark as new task
      completed: false, // Not completed initially
      failed: false, // Not failed initially
      task_title: formData.task_title,
      task_description: formData.task_description,
      task_date: formData.task_date,
      task_category: formData.task_category,
    };

    // Get existing data from localStorage
    const employeesArray = JSON.parse(localStorage.getItem("employees")) || [];
    console.log(employeesArray);


    // Find and update the assigned employee
    const updatedEmployees = employeesArray.map((employee) => {
      if (employee.first_name === formData.assign_to) {
        const currentCounts = employee.task_counts || {
          newTask: 0,
          active: 0,
          completed: 0,
          failed: 0,
        };
        return {
          ...employee,
          task_counts: {
            ...currentCounts,
            newTask: currentCounts.newTask + 1,
            active: currentCounts.active + 1,
          },
          tasks: [...(employee.tasks || []), newTask],
        };
      }
      return employee;
    });

    // Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    console.log(updatedEmployees);
    // Reset form
    setFormData({
      task_title: "",
      task_description: "",
      task_date: "",
      task_category: "",
      assign_to: "",
    });
  };

  return (
    <div className="bg-[#1c1c1c] mt-7 rounded p-5">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap items-start w-full justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              name="task_title"
              onChange={handleChange}
              value={formData.task_title}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              name="task_date"
              onChange={handleChange}
              value={formData.task_date}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              name="assign_to"
              onChange={handleChange}
              value={formData.assign_to}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              name="task_category"
              onChange={handleChange}
              value={formData.task_category}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
              required
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="task_description"
            onChange={handleChange}
            value={formData.task_description}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            cols={30}
            rows={10}
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded-lg text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
