import { useSelector } from "react-redux"
import Todo from "./Todo"

function TodoData(){
    const todolist = useSelector((state) =>state.todolist)
    console.log(todolist)
    return <>
<ul className="list-group mt-4">
    {todolist.map(
        (todo) =>(
            <Todo key={todo.id} id={todo.id} title={todo.title}/>
        )
    )}
</ul>
    
    </>

}
export default TodoData