
import "./style.css"
import {useSelector } from "react-redux"
//we need to access the data/state in account component 
//who want to store data we give input useselector 
function Account(){
 let data = useSelector(  (state) =>{
    return state
//return state.balance
})
//call the hook and give input later every time we call
//hook it update the state changes
    return(<>
    <div className="container"> 
    <h2 id="h2" >Account Details</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Balance</th>
                <th>User Number</th>
                <th>Mobile Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>{ data.balance}</th>
                <th>{data.fullName}</th>
                <th>{data.mobile}</th>
            </tr>
        </tbody>
        </table></div>
 
    </>)

}
export default Account