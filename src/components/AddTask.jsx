import { useRef } from "react"

export const AddTask = ({addTask})=>{
    const imputref = useRef()
    return <> 
    <input ref={imputref} type= "text" />
    <button onClick={()=>{addTask(imputref.current.value)}}>agregar</button>
    </>
}