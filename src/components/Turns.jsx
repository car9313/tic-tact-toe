import { Square } from "./Square"
import { TURNS } from "../constants"
export const Turns= ({turn})=>{
    return(
        <section className="turn">
            <Square isSelected={turn == TURNS.x}>{TURNS.x}
            </Square>
            <Square isSelected={turn == TURNS.o}>{TURNS.o}
            </Square>
         </section>
      
    )
}