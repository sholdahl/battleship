import React, {useState} from "react";
import Board from "./Board"

const PlayerBoard = () => {

    const [coords, setCoords] = useState([
        {coord: "1A", ship: true},
        {coord: "2A", ship: false},
        {coord: "3A", ship: false},
        {coord: "4A", ship: false},
        {coord: "5A", ship: false},
        {coord: "6A", ship: false},
        {coord: "7A", ship: false},
        {coord: "8A", ship: false},
        {coord: "1B", ship: false},
        {coord: "2B", ship: false},
        {coord: "3B", ship: false},
        {coord: "4B", ship: false},
        {coord: "5B", ship: false},
        {coord: "6B", ship: false},
        {coord: "7B", ship: false},
        {coord: "8B", ship: false},
        {coord: "1C", ship: false},
        {coord: "2C", ship: false},
        {coord: "3C", ship: false},
        {coord: "4C", ship: false},
        {coord: "5C", ship: false},
        {coord: "6C", ship: false},
        {coord: "7C", ship: false},
        {coord: "8C", ship: false},
        {coord: "1D", ship: false},
        {coord: "2D", ship: false},
        {coord: "3D", ship: false},
        {coord: "4D", ship: false},
        {coord: "5D", ship: false},
        {coord: "6D", ship: false},
        {coord: "7D", ship: false},
        {coord: "8D", ship: false},
        {coord: "1E", ship: false},
        {coord: "2E", ship: false},
        {coord: "3E", ship: false},
        {coord: "4E", ship: false},
        {coord: "5E", ship: false},
        {coord: "6E", ship: false},
        {coord: "7E", ship: false},
        {coord: "8E", ship: false},
        {coord: "1F", ship: false},
        {coord: "2F", ship: false},
        {coord: "3F", ship: false},
        {coord: "4F", ship: false},
        {coord: "5F", ship: false},
        {coord: "6F", ship: false},
        {coord: "7F", ship: false},
        {coord: "8F", ship: false},
        {coord: "1G", ship: false},
        {coord: "2G", ship: false},
        {coord: "3G", ship: false},
        {coord: "4G", ship: false},
        {coord: "5G", ship: false},
        {coord: "6G", ship: false},
        {coord: "7G", ship: false},
        {coord: "8G", ship: false},
      ]);

    return (
        <div className="col-12 col-md-6 text-center board player-board">
            <h2>Player Board</h2>
            <Board coords={coords} setCoords={setCoords}/>
        </div>
    )
};

export default PlayerBoard