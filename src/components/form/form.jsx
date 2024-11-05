import React, { useState } from 'react'
import style from './form.module.css'
import { nanoid } from 'nanoid'
export const Form = ({getData}) => {
  const [todoTitle,setTodoTitle]=useState("")
  const submit =(e)=>{
    e.preventDefault()
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTodoTitle('')
    console.log(todoTitle);
    getData((p)=>{
      return [...p,{title:todoTitle,id:nanoid(),time:time}]
    })
  }
  return (
    <div className={style.form__wrapper}>
        <form onSubmit={submit}>
            <input value={todoTitle} onChange={(e)=> setTodoTitle(e.target.value)} type="text" placeholder='make todo . . .'/>
            <button type='submit'>create</button>
        </form>
    </div>
  )
}

