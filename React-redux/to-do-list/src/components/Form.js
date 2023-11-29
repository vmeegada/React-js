
import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "./Action";

import TodoData from "./Tododata";

const Form=()=>{
    const dispatch=useDispatch();

    const [todoTitle,setTodoTitle]=useState("")

    const handleTodo=()=>{
        // check input is empty or not/remove space by using trim()
        if(todoTitle.trim())
        {
            const newTodo={
                title:todoTitle
            };
            dispatch(addTodo(newTodo))
            // return  {type:"ADD_TODO",payload:todo}
            setTodoTitle("")
        }
        
    };
    return(
        <>
        <div className="container mt-5 w-40">
        <h3 className="text-primary text-center">Todo App Using React-Redux</h3>
        <div className="input-group">
        {/* to check input is empty or not by using usestate */}
      <input type="text" className="form-control" 
      value={todoTitle} 
      onChange={(e)=>setTodoTitle(e.target.value)}/>
      {/* //by using value only read the data
      //if we write only date we add onCnahge function  in that function we give settodolist update state*/}
      <button className="btn btn-primary"
      onClick={()=>handleTodo()}
        >
            Add</button>

   </div>
   <TodoData/>
   </div>
   </> )


}
export default Form
//here input field we give data it will add in  state 
//so we need to sho in browser
//we create seperate component or same component 
//but we choose seperate component why beacuse its is to be independent
//we create a two component 
//1)Todo.js -->show for one todo 
//2)todolist1 -->show all todolist 