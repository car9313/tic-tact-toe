import { WINNER_COMBOS } from "../constants"
// cheaquer si existe ganador
export const checkWinner = (boardToCheck) => {
    // revizar todas las conbinaciones ganadoras
    // chequeando si existe ganador
    for (const combo of WINNER_COMBOS) {
       const [a, b, c] = combo
       if (
          boardToCheck[a] &&
          boardToCheck[a] == boardToCheck[b] &&
          boardToCheck[b] == boardToCheck[c]
       ) {
          console.log('Existe ganador')
          return boardToCheck[a]
       }
    }
    return null // esto significa que no hay ganador
 }

 
export const checkEndGame = (newBoard) => {
   return newBoard.every(square => square != null)
}