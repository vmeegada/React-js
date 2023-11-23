

export function deposit(amount){
    return {type:"deposit",payload:amount}}

export function withdraw(amount){
    return{type:"withdraw",payload:amount}
}


export function nameUpdate(fullName){
   return {type:"nameUpdate", payload:fullName}
}


export function mobileupdate(mobile){
    return {type:"mobileupdate",payload:mobile}
}


export function reSet(){
    return {type:"reset"}
}
