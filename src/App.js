
import { useState, useEffect } from 'react';
import style from  './App.module.css';
import { AddTodoForm } from './widgets/addTodoForm/addTodoForm';
import { ListTodos } from './widgets/list/list';
import {useDispatch, useSelector} from 'react-redux'
import { addNewTodo, fetchTodos } from './store/todoslice';


function App() {
  
  const [newTodo, setNewTodo] =useState(false)
  const [text, setText] =useState('')
  const handeleChangeInput = (event) => {
    setText(event?.target.value);
  };
  const {status,error} = useSelector(state => state.todos)
  const despatch = useDispatch();

  useEffect(()=>{
    despatch(fetchTodos())
  },[despatch])
  
  const addTask =()=>{
    despatch(addNewTodo(text));
    setText('');
    setNewTodo(false)
  }

  const submitHandler =(event)=>{
    despatch(addNewTodo(text));
    event.preventDefault();
    setText("");
    setNewTodo(false);
  }


  return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>TodoList</h1>
        </div>
        <div className={style.content}>
          <div className={style.wrapperText}>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2 className={style.textError}> An error occured:{error}</h2>}
          </div>

          <ListTodos/>
        </div>
        <div  className={style.footer}>
          <button className={style.btn} onClick={()=> setNewTodo(true)}>Add New Task</button>
        </div>

        {newTodo &&
          <AddTodoForm 
            onClose = {()=> setNewTodo(false)} 
            value={text}  
            onClick={addTask}
            onChange={handeleChangeInput}
            onSubmit={submitHandler}
            />
           
        }
    </div>

  );
}

export default App;
