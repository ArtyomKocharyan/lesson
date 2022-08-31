export const reducer=(state=89,action)=>{
    if(action==='PLUS'){
    return state+1
}else if(action==='MINUS'){
    return state-1
}else if(action==='RESET'){
    return state
}
}