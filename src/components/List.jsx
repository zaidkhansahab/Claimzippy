import axios from 'axios'
import React from 'react'
import { baseURL } from '../utils/constant'

const List = ({ task, description, updateMode, taskId }) => {
  console.log(taskId)
  const deleteTask = () => {
    axios.delete(`${baseURL}/delete/${taskId}`)
      .then((response) => {
        console.log('Item deleted');
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  return (

    <div className=" w-12/12 h-8 flex flex-row mx-4 ">
      <div className="basis-3/12 truncate">
        <p className="w-full h-full px-2 border text-center">{task}</p>
      </div>
      <div className="basis-full border truncate flex items-center justify-center">
        <div className="w-full h-full px-2   border text-center">{description}</div>
      </div>
      <div className="basis-2/12 border">
        <button className="w-full h-full flex items-center justify-center border " onClick={() => updateMode(taskId, task, description)}>Update</button>
      </div>
      <div className="basis-2/12 border">
        <button className="w-full h-full flex items-center justify-center border cursor-pointer" onClick={deleteTask}>Delete</button>
      </div>
    </div>

  )
}

export default List
