import gameboard from "./gameboard"

const player = (name) => {
    const board = gameboard();

    const attack = (coordinates, opponent) => {
        opponent.board.receiveAttack(coordinates);
    }

    return {name, board, attack}
}

export default player