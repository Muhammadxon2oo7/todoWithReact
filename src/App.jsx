import { useState } from 'react'
import style from './App.module.css'
import { Form } from './components/form'
import { Todolist } from './components/todo-list'
import { nanoid } from 'nanoid'
function App() {
  const [todos,setTodos]=useState([])
  console.log(todos);
  return (
    <>
     <h1 className={style.title}>React Todo Created by <span>Mr</span></h1>
     <Form getData={setTodos} />
     <Todolist getData={setTodos} data={todos}/>
    </>
  )
}
export default App
