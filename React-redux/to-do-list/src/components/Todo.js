
import { useState } from "react"
import { editTodo,deleteTodo } from "./Action";
import { useDispatch } from "react-redux";
function Todo({id,title}){

    const [edit,setEdit]=useState(false);
    const [newTitle,setNewTitle] = useState(title)
    const dispatch =useDispatch()

    function handleEdit(){
      if(newTitle.trim()){
        dispatch(editTodo({id:id,title:newTitle}))
        setEdit(false)
      }}

    function handleDelete(){
      dispatch(  deleteTodo(id))

    }
    return (
        <div>
            {
                edit ? (
                    <div className="form-group">
                     <input  className="form-control"  value={newTitle}  onChange={(e)=>setNewTitle(e.target.value)} type="text"/>
                     <button className="btn btn-secondary" onClick={handleEdit}>Save</button>
                     </div>
                ) :(
                    <li className="list-group-item">
                        <p>{title}</p>
                        <div className="actions">
                        <button className="btn btn-warning" onClick={()=>setEdit(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
  </div>
                    </li>
                )
            }
        </div>
    )
}
export default Todo