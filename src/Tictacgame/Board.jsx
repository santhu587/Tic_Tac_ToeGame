import React, { useState } from "react";
import Sqaure from "./Sqaure";

const Baord = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isxturn, setIsxtrun] = useState(true);

    const checkwinner = () => {
        const winnerlogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let logic of winnerlogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const iswinner = checkwinner();

    const handleclick = (index) => {
        if (state[index] != null) {
            return;
        }
        const copystate = [...state];
        copystate[index] = isxturn ? "X" : "O";
        setState(copystate);
        setIsxtrun(!isxturn);
    };

    const handlereset = () => {
        setState(Array(9).fill(null));
    };

    return (
        <div className="board-container">
        <div class="welcome-message">
        Welcome to Tic Tac Toe Game
    </div>
            {iswinner ? (
                <>
                    <div className="winner-message">{iswinner} won the game</div>
                    <button onClick={handlereset} className="reset-button">Play Again</button>
                </>
            ) : (
                <>
                    <h2 className="player-turn">Player {isxturn ? "X" : "O"}, please move</h2>
                    <div className="board-row">
                        <Sqaure onClick={() => handleclick(0)} value={state[0]} />
                        <Sqaure onClick={() => handleclick(1)} value={state[1]} />
                        <Sqaure onClick={() => handleclick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Sqaure onClick={() => handleclick(3)} value={state[3]} />
                        <Sqaure onClick={() => handleclick(4)} value={state[4]} />
                        <Sqaure onClick={() => handleclick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Sqaure onClick={() => handleclick(6)} value={state[6]} />
                        <Sqaure onClick={() => handleclick(7)} value={state[7]} />
                        <Sqaure onClick={() => handleclick(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Baord;
