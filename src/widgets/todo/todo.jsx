
import React from "react";
import style from "./todo.module.css";


export const Todo = (props) => {
  return (
    <label
    className={style.label}
    >
      <div>
        <input
          className={style.input}
          type="checkbox"
          checked={props.completed}
          onChange={props.onChange}
        />
        <div
        className={style.checkbox}
        ></div>
      </div>
      <div
      className={style.title}
      >
        {props.title}
      </div>
   
        <button className={style.btn} onClick={props.remove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6.00002L18.7742 18.7742M6 18.7742L18.7742 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
     
    </label>
  );
};
