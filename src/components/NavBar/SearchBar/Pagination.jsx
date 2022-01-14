import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages, firstPage } = props;
  return (
		<div>
			<div className="pages">
				<button onClick={onLeftClick}>⬅</button>
				<span>
					{page} de {totalPages}
				</span>
				<button onClick={onRightClick}>➡</button>      
			</div>
			<button className="backPages" onClick={firstPage}>Volver al inicio</button>
		</div>
  );  
};

export default Pagination;
