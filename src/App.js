import Leftsidebar from "./components/Leftsidebar";
import Navbars from "./components/Navbars";
import pp from './components/assets/pp.jpg'
import iii from './components/assets/iii.png'
import i7 from './components/assets/i7.png'
import i6 from './components/assets/i6.png'
import i12 from './components/assets/i12.png'
import { useEffect, useState } from "react";
import axios from "axios"
import { baseURL } from "./utils/constant";
import List from "./components/List";

const App = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState('');
  const [getData, setGetdata] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);


  const getdata = () => {
    axios.get(`${baseURL}/api/get`).then((res) => {
      console.log(res.data);
      setGetdata(res.data)
    })
  }

  useEffect(() => {
    getdata()
  }, [getData]);

  const addTask = () => {
    axios.post(`${baseURL}/api/save`, { task: tasks, description }).then((res) => {
      console.log(res.data);
      setTasks(res.data.task);
      setDescription(res.data.description)
      setTasks("")
      setDescription("")
    });
  };

  const updateMode = (taskId, task, description) => {

    setTasks(task);
    setDescription(description);
    setUpdateId(taskId, tasks, description)
  };

  const updateTask = () => {
    axios.put(`${baseURL}/api/update/${updateId}`, { task: tasks, description }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setTasks("")
      setDescription("")
    });
  };
  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbars />
      <div className="flex ">
        <Leftsidebar />

        {/*  main content */}


        <main className="w-3/4 p-4">
          <div className="bg-white  h-16 shadow-2xl ">
            <div className=" grid grid-flow-col  ">
              <h1 className="text-blue-900 text-left text-xl font-bold pt-4 pl-3 ">Dashboard</h1>
              <div className="justify-end  grid grid-flow-col ">
                <div className="pt-4">
                  <p className=" "> Welcome Ritesh Singh </p>
                </div>
                <div className="  pt-2  pl-3 relative h-14 w-14 ">
                  <img className='h-full w-full rounded-full  ' src={pp} alt="/" />

                </div>
                <div className="pl-3 pr-4 pt-4">
                  <img className='h-9 w-9 ' src={iii} alt="/" />

                </div>
              </div>
            </div>

          </div>
          <div className="bg-white h-[70vh] mt-6   shadow-2xl pt-7 relative">
            <div className="  grid grid-cols-2 grid-flow-col w-2/6 mx-auto    " >

              <div className="bg-blue-600 items-center   justify-center "><h1 className="p-3 text-white text-center">My Audit </h1></div>
              <div className="border-solid border-2 border-blue-600 items-center  justify-center "> <h1 className="p-3 text-blue-600 text-center">Provider Audit </h1></div>

            </div>
            <div className=" mt-6   justify-center items-center  grid grid-cols-1 grid-flow-col  w-fit ">
              <div className=" ml-64 p-1 text-lg">
                <p>Search By : </p>
              </div>
              <div className=" border-blue-600 border-solid border-2  ml-6 flex p-1 rounded-sm  ">
                <p className="text-blue-600 ml-1">Task Id </p>
                <img className='h-6 w-6 mt-1 ml-14 ' src={i6} />
              </div>
              <div className=" border-blue-600 border-solid border-2 ml-5 rounded-full  flex px-2  ">
                <input
                  type="text"
                  class="w-full px-3 py-2  rounded-full  "
                  placeholder="Search By Task Id"
                />
                <img className='h-6 w-6 mt-2 ' src={i12} alt="/" />

              </div>
              <div className=" ml-64 justify-end items-end grid grid-flow-col">

                <img className='pt-2  pl-3 relative h-8 w-8 items-end' src={i7} alt="/" />

              </div>

            </div>

            <div className=" my-4 flex items-center justify-center overflow-y-auto max-h-72">
              <div className="  ml-1 p-1   " >
                <input
                  type="text" value={tasks} onChange={(e) => setTasks(e.target.value)}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter task"
                />

              </div>
              <div className="   ml-1 p-1 ">
                <input
                  type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Enter description"
                />

              </div>
              <div className="  ml-1 py-2 px-4 rounded-md hover:bg-blue-300 ">
                <button type="submit" onClick={updateId ? updateTask : addTask} >{updateId ? "update" : "Add"}</button>

              </div>
            </div>


            <div className=" w-12/12 h-8 flex flex-row mx-4">
              <div className="basis-3/12 ">
                <div className="w-full h-full flex items-center justify-center border bg-gray-600 text-white">Task</div>
              </div>
              <div className="basis-full border">
                <div className="w-full h-full flex items-center justify-center border bg-gray-600 text-white">Description</div>
              </div>
              <div className="basis-2/12 border">
                <div className="w-full h-full flex items-center justify-center border bg-gray-600 text-white">Update</div>
              </div>
              <div className="basis-2/12 border">
                <div className="w-full h-full flex items-center justify-center border bg-gray-600 text-white">Delete</div>
              </div>
            </div>
            <div className="w-12/12 h-60 overflow-y-scroll">

              {getData.map((task) => (
                <List key={task._id} taskId={task._id} task={task.task} description={task.description} setUpdateUI={setUpdateUI} updateMode={updateMode} />
              ))}

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
