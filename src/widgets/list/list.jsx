import React from "react";
import { Todo } from "../todo/todo";
import style from "./list.module.css";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteTodo,toggleStatus} from '../../store/todoslice'

export const ListTodos = () => {
  const todos = useSelector(state=> state.todos.todos);
  const dispatch =useDispatch()
  return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={style.item}
            >
              <Todo 
               title={todo.title} 
               completed={todo.completed}
               remove={()=>dispatch(deleteTodo(todo.id))}
               onChange={()=>dispatch(toggleStatus(todo.id))}
               />
            </li>
          ))}
        </ul>
      </div>

  );
};
