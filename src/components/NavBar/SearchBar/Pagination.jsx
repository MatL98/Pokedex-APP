import React from "react";

const Pagination = (props) =>{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="pages">
                <button onClick={onRightClick}>➡</button>
                <span>{page} de {totalPages}</span>
                <button onClick={onLeftClick}>⬅</button>
        </div>
    )
}

export default Pagination;