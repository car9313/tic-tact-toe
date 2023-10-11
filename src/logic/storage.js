export const saveLocalStorage =({board, turn})=>{
    window.localStorage.setItem('board',JSON.stringify(board))
    window.localStorage.setItem('turn',turn)
}
export const removeLocalStorage= ()=>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}