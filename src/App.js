
import { useState } from 'react';
import style from  './App.module.css';
import { AddTodoForm } from './widgets/addTodoForm/addTodoForm';
import { ListTodos } from './widgets/list/list';
import {useDispatch} from 'react-redux'
import { addTodo } from './store/todoslice';


function App() {
  const [newTodo, setNewTodo] =useState(false)
  const [value, setValue] =useState('')
  const handeleChangeInput = (event) => {
    setValue(event?.target.value);
  };
  const despatch = useDispatch();
  const addTask =()=>{
    despatch(addTodo(value));
    setValue('');
    setNewTodo(false)
  }

  const submitHandler =(event)=>{
    despatch(addTodo(value));
    event.preventDefault();
    setValue("");
    setNewTodo(false);
  }
  return (
      <div className={style.wrapper}>
        <div className={style.header}></div>
        <div className={style.content}>
          <ListTodos/>
        </div>
        <div  className={style.footer}>
          <button className={style.btn} onClick={()=> setNewTodo(true)}>Add New Task</button>
        </div>

        {newTodo &&
          <AddTodoForm 
            onClose = {()=> setNewTodo(false)} 
            value={value}  
            onClick={addTask}
            onChange={handeleChangeInput}
            onSubmit={submitHandler}
            />
           
        }
    </div>

  );
}

export default App;
