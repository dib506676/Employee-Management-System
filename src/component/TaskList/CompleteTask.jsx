import React from "react";

function CompleteTask({ data }) {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 rounded px-3 py-1 text-sm">
          {data.task_category}
        </h3>
        <h4 className="text-sm">{data.task_date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.task_title}</h2>
      <p className="text-sm mt-2">{data.task_description}</p>
      <div className="mt-4">
        <button className="bg-green-500 w-full rounded-lg">
          Completed Task
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
