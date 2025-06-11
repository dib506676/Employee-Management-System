import React from "react";

function NewTask({data}) {
  return (
    <div className="flex-shrink-0 h-full p-3 sm:p-4 lg:p-5 w-[280px] sm:w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">
          {data.task_category}
        </h3>
        <h4 className="text-xs sm:text-sm">{data.task_date}</h4>
      </div>
      <h2 className="mt-3 sm:mt-4 lg:mt-5 text-lg sm:text-xl lg:text-2xl font-semibold">{data.task_title}</h2>
      <p className="text-xs sm:text-sm mt-2">{data.task_description}</p>
      <div className="mt-3 sm:mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-1/2 py-1 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm rounded-lg transition-colors duration-200">Accept Task</button>
        
      </div>
    </div>
  );
}

export default NewTask;
