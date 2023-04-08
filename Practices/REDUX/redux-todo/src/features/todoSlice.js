import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1122, text:"Learn Redux with hitesh"},{id:112, text:"Learn Redux is very Fun"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id: nanoid(), //generate a unique id
                text: action.payload
            };

            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=> todo.id!==action.payload)
        }
    }
})

export const {addTodo, removeTodo}=todoSlice.actions;
export default todoSlice.reducer;