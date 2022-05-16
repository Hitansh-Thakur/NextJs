import Head from "next/head";
import Script from "next/script";
import React from "react";
import { useState } from "react";

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
let date = `${today.getDate()} ${
  months[today.getMonth()]
} ${today.getFullYear()} `;
let minutes = today.getMinutes();
let hour = today.getHours();
if (hour > 12) {
  hour = hour % 12;
}
let time = `${hour}:${minutes < 10 ? "0" + minutes : minutes} ${
  hour < 12 ? "PM" : "AM"
}`;

const addtask = () => {
  // GET A SOLUTION TO GET INITIALIZATION STATEMENTS OUT OF FUNCTIONS
  // USING DOCUMENT ELEMENT OUTSIDE FUNCTION
  // RESEARCH ON "ReactDOM"

  let titleInput = document.getElementById("title-input").value;
  let descInput = document.getElementById("desc-input").value;

  let title = document.getElementById("title");
  let desc = document.getElementById("desc");

  // create title element
  let heading = document.createElement("h1");
  var titlenode = document.createTextNode(titleInput);
  heading.appendChild(titlenode);
  document.getElementById("task-container").appendChild(heading);

  let description = document.createElement("p");
  var descnode = document.createTextNode(descInput);
  description.appendChild(descnode);
  document.getElementById("task-container").appendChild(description);


  // Displaying Input Data as Task 
  title.innerText = titleInput;
  desc.innerText = descInput;

  // console.log("add task");
};

const deleteTask = () => {};

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
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    {day}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {date}
                    <br /> {time}
                  </span>
                </div>
                <div id="task-container" className="md:flex-grow">
                  <h2
                    id="title"
                    className="text-2xl font-medium text-gray-900 title-font mb-2"
                  >
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p id="desc" className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <button
                    onClick={deleteTask}
                    className="text-purple-500 inline-flex items-center mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* -------------------------------------------------------------------------------------------------------------- */}

              {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {day}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {date} {month} {year}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <button className="text-purple-500 inline-flex items-center mt-4">
                  Learn More
                </button>
              </div>
            </div> */}
              {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {day}
                </span>
                <span className="text-sm text-gray-500">
                  {date} {month} {year}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-purple-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
