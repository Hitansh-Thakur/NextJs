import React from "react";
import { useState } from "react";



const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];




















const addtask = () => {
  // GET A SOLUTION TO GET INITIALIZATION STATEMENTS OUT OF FUNCTIONS
  // USING DOCUMENT ELEMENT OUTSIDE FUNCTION
  // RESEARCH ON "ReactDOM"

  const deleteTask = () => {
    TaskContainer.remove();
    console.log("deleted Task");
  };

  let titleInput = document.getElementById("title-input").value;
  let descInput = document.getElementById("desc-input").value;

  let title = document.getElementById("title");
  let desc = document.getElementById("desc");

  // create title element
  let TaskContainer = document.createElement("div");

  let heading = document.createElement("h1");
  var titlenode = document.createTextNode(titleInput);
  heading.setAttribute(
    "class",
    "text-2xl font-medium text-gray-900 title-font mb-2"
  );
  heading.appendChild(titlenode);
  TaskContainer.appendChild(heading);

  // create description element
  let description = document.createElement("p");
  let descnode = document.createTextNode(descInput);
  description.setAttribute("class", "leading-relaxed");
  description.appendChild(descnode);
  TaskContainer.appendChild(description);

  // create delete task btn
  let deletebtn = document.createElement("button");
  let deletebtnnode = document.createTextNode("Delete");
  deletebtn.setAttribute(
    "class",
    "text-purple-500 inline-flex items-center mt-4 cursor-pointer"
  );
  deletebtn.appendChild(deletebtnnode);
  TaskContainer.appendChild(deletebtn);
  deletebtn.addEventListener("click", deleteTask);

  let Alltasks = document.getElementById("tasks");
  Alltasks.appendChild(TaskContainer);

};


let hi ="hi"

const Todo = () => {
  const todayd = new Date()

  // const [today, settoday] = useState('todayd');
  const [today, settoday] = useState( [ new Date()])
  console.log(`\n\n\nTODAY IS  ${typeof(today)}\n\n\n`)

  // let day = weekday[today.getDay()];
  const [day, setday] = useState(weekday[today.getDay()])

  // let date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()} `;
  
  settoday(`${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`)

  // let minutes = today.getMinutes();
  const [minutes, setminutes] = useState(today.getMinutes())

  // let hour = today.getHours();
  const [hour, sethour] = useState(today.getHours())


  if (hour > 12) {
    // hour = hour % 12;
    sethour(hour % 12)
  }

  
// let time = `${hour}:${minutes < 10 ? "0" + minutes : minutes} ${hour < 12 ? "PM" : "AM"}`;
const [time, settime] = useState(`${hour}:${minutes < 10 ? "0" + minutes : minutes} ${hour < 12 ? "PM" : "AM"}`)




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
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    {/* {day} */}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {today}
                    <br /> {time}
                  </span>
                </div>
                <div id="tasks">
                  <div id="task-container" className="md:flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
