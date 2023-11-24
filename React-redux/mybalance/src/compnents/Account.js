
import "./style.css"
import {useSelector } from "react-redux"
//we need to access the data/state in account component 
//who want to store data we give input useselector 
function Account(){
 let data = useSelector(  (state) =>{
    return state
//return state.balance
})
// console.log(data)//>Object
// account: {balance: 0, fullName: '', mobile: null}
// transaction: []
// [[Prototype]]:Object
//call the hook and give input later every time we call
//hook it update the state changes
    return(<>
    <div className="container"> 
    <h2 id="h2" >Account Details</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Balance</th>
                <th>User Name</th>
                <th>Mobile </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>{ data.account.balance}</th>
                <th>{data.account.fullName}</th>
                <th>{data.account.mobile}</th>
            </tr>
        </tbody>
        </table></div>

        {/* transaction table  */}
        <div className="container"> 
    <h2 id="h2" >Transaction Details</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
   {/* list rendering */}
        {
        data.transaction.map((tr,index) =>( 
        <tr key={tr.id}>
            <td>{ tr.id}</td>
            <td>{ tr.amount}</td>
            <td>{ tr.type}</td>
            <td>{ tr.date.toString()}</td>
            
        </tr>))
        }
           
        </tbody>
        </table></div>
 
    </>)

}
export default Account