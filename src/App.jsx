import React, { useState } from "react"
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { Turns } from './components/Turns'
import { saveLocalStorage,removeLocalStorage } from './logic/storage';
function App() {
  //Importante la inicializacion del estado solo ocurre una vez
  const [turn, setTurn] = useState(()=>{
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.x 
  });
  const [board, setBoard] = useState(()=>{
    const boardFromLoacalStorage = window.localStorage.getItem('board') /* Es impotante poner la obtencion del localStorage dentro
     de la inicializacion del estado
      porque este se ejecuta una sola vez (leer del localStorage es sincrono bloquea y es lento )*/
    return boardFromLoacalStorage? JSON.parse(boardFromLoacalStorage): Array(9).fill(null)
  });
  const [winner, setWinner] = useState(null); // el null: no hay ganador, el false: hay empate
  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    removeLocalStorage()
   };
  const boardUpdate = (index) => {
    // no acualizamos la posicion si hay (x||o)   o existe un ganador
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
  //Actualizo el board 
    setBoard(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    //Actualizo el turno
    setTurn(newTurn);
    saveLocalStorage({
     'board': newBoard,
     'turn': newTurn
    })
    const newwinner = checkWinner(newBoard);
    /* Al ser la ctualizacion del
     estado asincrona es importante
     pasar al checkWinner el valor del newBoard
     porque es no podemos
    confiar en que el setBoard actualice el board
     por eso nos aseguaramos de pasar el newBoard
     que si esta actualizado */
    if (newwinner) {
      confetti();
      setWinner(newwinner); // Importante la actualizacion de los estados
      // en react es asincrona (no bloquea la ejecucion de las lineas que vengan despues )
      // Al ser la actualizacion del estado asincrono (winner en este
      // console.log no tiene porque tener el estado actualizado).
    } else if (checkEndGame(newBoard)) {
      setWinner(false);// empate
    }
  };
  return (
    <main className="board">
      <button onClick={reset} type="submit">Reasetear el Juego</button>
      <Board board={board} boardUpdate={boardUpdate} />
      <WinnerModal winner={winner} reset={reset} />
      <Turns turn={turn} />
    </main>
  );
}
export default App;
