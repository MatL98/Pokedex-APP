import React from "react";

const Pagination = (props) =>{
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="pages">
                <button onClick={onLeftClick}>⬅</button>
                <span>{page} de {totalPages}</span>
                <button onClick={onRightClick}>➡</button>
        </div>
    )
}

export default Pagination;