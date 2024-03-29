import React from "react";

const addtask = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  let day = weekday[today.getDay()];
  let date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()} `;
  let minutes = today.getMinutes();
  let hour = today.getHours();
  let meridiem = "AM"
  if (hour > 12) {
    meridiem = "PM"
    hour = hour % 12;
  }

  let time = `${hour}:${minutes < 10 ? "0" + minutes : minutes} ${meridiem}`;

  // GET A SOLUTION TO GET INITIALIZATION STATEMENTS OUT OF FUNCTIONS
  // USING DOCUMENT ELEMENT OUTSIDE FUNCTION
  // RESEARCH ON "ReactDOM"


  let titleInput = document.getElementById("title-input").value;
  let descInput = document.getElementById("desc-input").value;

  let task = document.createElement("div")
  task.innerHTML = `
  <div class="py-8 flex flex-wrap md:flex-nowrap">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span class="font-semibold title-font text-gray-700">${day}</span>
      <span class="mt-1 text-gray-500 text-sm">${date}</span>
      <span class="mt-1 text-gray-500 text-sm">${time}</span>
    </div>
    <div class="md:flex-grow">
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${titleInput}</h2>
      <p class="leading-relaxed">${descInput}</p>
      <button  onClick="this.parentElement.parentElement.remove();" class="deleteBtn text-blue-500 inline-flex items-center mt-4">Delete</button>
      
    </div>
  </div>
`


  let Alltasks = document.getElementById("tasks");

  Alltasks.append(task);

};

const Todo = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <h1 className="text-2xl text-center">Add Task</h1>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmfor="task-input"
                className="leading-7 text-sm text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title-input"
                name="task-input"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmfor="task-input"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                id="desc-input"
                name="task-input"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={addtask}
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Add
            </button>
          </div>

          <div className="container px-5 py-24 mx-auto">
            <div id="tasks" className="-my-8 divide-y-2 divide-gray-100">

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
