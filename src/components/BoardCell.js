import React from "react";

const BoardCell = props => {
    const { text, cellClass, coord, ship, handleClick} = props;

    let containerClasses = cellClass + " grid-item";

    return(
        <div className={containerClasses} onClick={handleClick} data-coord={coord}>
            <span className="inner-grid-item">{text}</span>
        </div>
    )
};

export default BoardCell