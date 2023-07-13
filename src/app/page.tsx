"use client";
import { observer } from "mobx-react-lite";
// import { DataStore } from "@/store/DataStore";
import { Task } from "@/store/DataStore";
import { useEffect, useMemo, useState } from "react";
// import Tasktable from "@/components/Tasktable";
import { DataStore } from "../store/DataStore";
import Tasktable from "../components/Tasktable";

export default observer(function Home() {
  const [taskData, setData] = useState<Task>({
    name: "",
    description: "",
    status: false,
    createdAt: new Date().toLocaleString(),
    completedAt: "",
  });

  const [popupData, setPopupData] = useState<Task>({
    name: "",
    description: "",
    status: false,
    createdAt: "",
    completedAt: "",
  });

  const [tasks, setTasks] = useState<Task[]>([]);
  const store = new DataStore();

  useEffect(() => {
    setTasks(store.get());
  }, []);

  const handlePopup = (data: Task) => {
    setPopupData(data);
  };

  const updateTask = (index: number) => {
    store.update(index);
    setTasks(store.get());
  };

  const deleteTask = (index: number) => {
    store.delete(index);
    setTasks(store.get());
  };

  const addTask = (taskData: Task) => {
    if (taskData.name != " " && taskData.description != "") store.set(taskData);
    setTasks(store.get());
  };

  const handleInputTask = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...taskData, [name]: value });
  };

  return (
    <div>
      {/* Task Form */}

      <h1 className="text-4xl font-bold text-center font-sans p-3 mb-5 border-pink-500 bg-pink-600 hover:bg-green-400">
        Task Management App
      </h1>
      <form
        className="w-11/12 m-auto font-sans border-2 rounded border-black-1000"
        onSubmit={(e) => {
          event?.preventDefault();
          addTask(taskData);
          document.querySelector("form")?.reset();
        }}
      >
        <div className="flex justify-between border-b-2 p-5 border-blue-400">
          <label htmlFor="name" className="text-xl">
            Task Name
          </label>
        </div>
        <input
          type="text"
          id="name"
          className={"w-96 m-2 border-2 rounded p-2 "}
          placeholder="Enter Task Name"
          name="name"
          required={true}
          onChange={handleInputTask}
        />

        <div className="flex justify-between border-b-2 p-5 border-blue-400">
          <label htmlFor="description" className="text-xl">
            Task Description
          </label>
        </div>
        <textarea
          id="description"
          name="description"
          cols={40}
          rows={4}
          required={true}
          className={"border-2 m-2 rounded p-2 w-96"}
          placeholder="Enter Task Details"
          onChange={handleInputTask}
        ></textarea>

        <div className="text-center p-5">
          <button className="border-2 rounded p-2 w-36 border-pink-500 bg-pink-600 hover:bg-pink-400 font-font-semibold text-white tracking-wider">
            Add Task
          </button>
        </div>
      </form>

      <Tasktable
        tasks={tasks}
        update={updateTask}
        deleteTask={deleteTask}
        handlePopup={handlePopup}
      />

      <div
        className="d-hide w-3/4 m-auto fixed top-40 inset-0 flex items-center justify-center"
        id="test"
      >
        <div className="bg-white text-lg  p-8 rounded shadow-lg shadow-green-200">
          <div className="flex justify-end">
            <button
              className="text-center w-8 bg-green-500 font-thin font-sans text-white text-lg border-2 rounded-full border-white"
              onClick={() =>
                document.getElementById("test")?.classList.toggle("d-block")
              }
            >
              ✘
            </button>
          </div>
          <h1>
            <span className="font-bold">Title:</span> {popupData.name}
          </h1>
          <h2>
            {" "}
            <span className="font-bold">Current Status:</span>{" "}
            {popupData.status ? "Completed" : "Pending"}
          </h2>
          <p>
            <span className="font-bold">Task Description:</span>{" "}
            {popupData.description}
          </p>
          <p>
            <span className="font-bold">Task Assigned At:</span>{" "}
            {popupData.createdAt}
          </p>
          <p>
            <span className="font-bold">Task Completed At:</span>{" "}
            {popupData.completedAt}
          </p>
        </div>
      </div>
    </div>
  );
});
