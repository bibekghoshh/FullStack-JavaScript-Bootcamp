import React,{useState, useContext} from "react";
import {FormGroup,Input,Button,Form,InputGroup,InputGroupAddon, InputGroupText} from "reactstrap";
import {v4} from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm =()=>{

    const [todoString,setTodoString]=useState("");
    const {dispatch} =useContext(TodoContext);

    const handleSubmit= e =>{
        e.preventDefault();

        if(todoString===""){
            return alert("please enter Todo...");
        }

        const todo={
            todoString,
            id : v4()
        };

        dispatch({
            type :ADD_TODO,
            payload: todo
        });

        setTodoString("");
    };

    return(
        <Form onSubmit={handleSubmit}>
                <div className="form-items">
                    <Input type="text" name="todo" id="todo" placeholder="Your next todo..." 
                    value={todoString} onChange={e=>setTodoString(e.target.value)} />
                    <div addonType="prepend">
                        <Button className="add-btn" color="warning">Add</Button>
                    </div>
                </div>
        </Form>
    );
};

export default TodoForm;