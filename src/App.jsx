import { useState } from 'react'
import './App.css'
import { Logos } from './components/Logos'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'

function App() {
  const [tasks, setTask] = useState([])

  const addTask = (newTask) => {
    let objet = {
      task: newTask,
      status: false
    }
    setTask([...tasks, objet])

  }

const changeStatus = (index)=>{

  tasks[index].status = !tasks[index].status 
  setTask([...tasks]) 
}
const removeTask = (index)=>{
  tasks.splice(index,1)
  setTask([... tasks])

}
 
  return (
    <>
      <Logos />
      <h1> Administrador de tarea</h1>
      <AddTask addTask={addTask} />
      <ShowTask tasks={tasks} changeStatus= {changeStatus} removeTask={removeTask}/>

    </>
  )
}

export default App
