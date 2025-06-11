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
    <div className="bg-[#1c1c1c] mt-4 sm:mt-6 lg:mt-7 rounded p-3 sm:p-4 lg:p-5">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <div className="lg:col-span-1 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0.5">Task title</h3>
            <input
              name="task_title"
              onChange={handleChange}
              value={formData.task_title}
              className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0.5">Date</h3>
            <input
              name="task_date"
              onChange={handleChange}
              value={formData.task_date}
              className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
              required
            />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0.5">Assign to</h3>
            <input
              name="assign_to"
              onChange={handleChange}
              value={formData.assign_to}
              className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Employee name"
              required
            />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0.5">Category</h3>
            <input
              name="task_category"
              onChange={handleChange}
              value={formData.task_category}
              className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Design, Dev, etc."
              required
            />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <h3 className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0.5">Description</h3>
          <textarea
            name="task_description"
            onChange={handleChange}
            value={formData.task_description}
            className="w-full h-32 sm:h-40 lg:h-44 text-xs sm:text-sm py-2 px-3 sm:px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 resize-none"
            cols={30}
            rows={10}
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-xs sm:text-sm mt-3 sm:mt-4 w-full transition-colors duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
