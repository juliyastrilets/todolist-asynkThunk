import React from "react";
import { Todo } from "../todo/todo";
import style from "./list.module.css";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo,toggleTodoComplete} from '../../store/todoslice'

export const ListTodos = () => {
  const todos = useSelector(state=> state.todos.todos);
  const dispatch =useDispatch()
  return (
    <>
      {!todos.length && (
        <div
        className={style.wrapperText}
        >
          <span
           className={style.text}
          >
            You have no scheduled shares.
          </span>
          <span
          className={style.text}
          >
            Create your Todolist using the button Add.
          </span>
        </div>
      )}
      <div
      className={style.wrapper}
      >
        <ul
        className={style.list}
        >
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={style.item}
            >
              <Todo 
               title={todo.title} 
               completed={todo.completed}
               remove={()=>dispatch(removeTodo(todo.id))}
               onChange={()=>dispatch(toggleTodoComplete(todo.id))}
               />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
