import React from "react";
import style from "./style.module.css";


export const AddTodoForm = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.mask}></div>
      <form className={style.form} onSubmit={props.onSubmit}>
        <div className={style.header}>
            <button className={style.btnClose} onClick={props.onClickClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6.00002L18.7742 18.7742M6 18.7742L18.7742 6"
                  stroke="#14142B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
         
          <h3 className={style.title}>Add New Task</h3>
        </div>
        <div className={style.content}>
          <input className={style.input} value={props.value} onChange={props.onChange} placeholder="Fill the title" />
        </div>
        <div className={style.footer}>
          <button className={style.btn}  onClick={props.onClick}>
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};
