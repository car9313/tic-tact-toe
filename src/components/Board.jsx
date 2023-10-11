import { Square } from './Square';
export function Board({ board, boardUpdate }) {
  return (<section className="game">
      {
               board.map((square, index) => (
                 <Square
                   key={index}
                   index={index}
                   boardUpdate={boardUpdate}
                 >
                   {square}
                 </Square>
               ))
            }
    </section>
  );
}
