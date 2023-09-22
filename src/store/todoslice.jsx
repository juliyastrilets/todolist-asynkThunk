import {createSlice} from '@reduxjs/toolkit';

const todoSlice =createSlice({
  name:"todos",
  initialState:{
    todos:[]
  },
  reducers:{
    addTodo(state,action){
      state.todos.push({
        id:state.todos.length + 1,
        title:action.payload,
        completed:false,
      })
    },
    removeTodo(state,action) {
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
    },
    toggleTodoComplete(state,action){
      const toggledTodo = state.todos.find((todo)=>todo.id === action.payload);
      toggledTodo.completed = !toggledTodo.completed
    }
  }
})

export const {addTodo,removeTodo,toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;