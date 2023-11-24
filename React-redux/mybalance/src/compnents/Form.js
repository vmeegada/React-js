
import { useState } from "react"
import "./style.css"
import { useDispatch } from "react-redux"
import { deposit, mobileupdate, nameUpdate, withdraw,reSet } from "./Action";

function Form(){
    let dispatch=useDispatch()
    const [amount,setAmount]=useState("");
    const [fullName,setName]=useState("");
    const [mobile,setMobile]=useState("");  
    const [transcationId ,updatetsId]=useState(0)
    return(<>
    <div className="container">
        <h2>Form Details</h2>
        <div className="row">
            <div className="col-1"><input type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>{let data= e.target.value; setAmount(data)}}/>
                  <button onClick={()=>{
                    dispatch(deposit(amount));
                    updatetsId(transcationId+1)
                    dispatch({type:"ADD",payload:{id:transcationId,amount:amount,date:new Date(),type:"credit"}})
                    setAmount("")}}>
                      credit</button>


                  <button  id="b-2"onClick={()=>{
                    dispatch(withdraw(amount));
                    updatetsId(transcationId+1)
                    dispatch({type:"ADD",payload:{id:transcationId,amount:amount,date:new Date(),type:"debit"}})
                    setAmount("")}}>
                      debit</button></div>

            </div>
            <br></br><br></br>
            <div className="col-2"><input type="text" placeholder="Enter your Name" value={fullName} onChange={(e)=>{let data= e.target.value; setName(data)}}/>
                  <button onClick={()=>{
                    dispatch(nameUpdate(fullName));
                    setName("")}}>update</button> 
                    </div>

        <br></br><br></br>
            <div className="col-1"><input type="number" placeholder="Enter Mobile Number" value={mobile} onChange={(e)=>{let data = e.target.value;setMobile(data)}}/>
                  <button onClick={()=>{
                    dispatch(mobileupdate(mobile));
                    setMobile("")}}>update</button></div>

            </div>
            <br></br>
            <div> <button  id="b-2"onClick={()=>{
                    dispatch(reSet());
                  }}>Reset</button></div>
</>)

}
export default Form