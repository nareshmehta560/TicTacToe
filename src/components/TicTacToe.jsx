import { useState } from "react";
import Board from "./Board";


const PLAYER_x = "X";
const PLAYER_O = "O";


function TicTacToe() {
    const [tiles,setTiles] = useState(Array(9).fill(null));
    const [playerTurn,setPlayerTurn] = useState(PLAYER_x);
    const handleTileClick = (index) => {
 
        if (tiles[index] !== null) {
            return;
          }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === PLAYER_x) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_x);
        }
    };
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board 
            tiles = {tiles} 
            onTileClick = {handleTileClick}/>
        
        </div>
    );
}
export default TicTacToe;