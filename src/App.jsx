import { useState } from 'react'
import './App.css'
import { Logos } from './components/Logos'
import { AddTask } from './components/AddTask'

function App() {
  const [tasks, setTask] = useState([])

const addTask = (newTask)=>{
  setTask([...tasks,newTask])
  console.log(tasks)
}

  return (
    <>
      <Logos />
      <h1> Administrador de tarea</h1>
      <AddTask addTask={addTask} />
    </>
  )
}

export default App
