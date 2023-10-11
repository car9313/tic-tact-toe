import { Square } from "./Square"
export function WinnerModal({winner,reset}){
    if(winner == null) return null
    const winnerText = winner == false?'Empate':'Ganador'
    return(
        <section className="winner">
           <div className="text">
          <h2>
           {winnerText}
          </h2>
           {winner &&(
               <header className="win">
              <Square>{winner}</Square>
              </header>
           )}
          <button onClick={reset}>Volver a empezar</button>
           </div>
        </section>
    )
}