import React from 'react';
import './TableCell.css';

function TableCell({ data }) {
  return (
    <div className="TableCell">
      <div className="TableCell-line">
        <p>{data.x}</p>
      </div>
      <div className="TableCell-line">
        <p>{data.y}</p>
      </div>
    </div >
  );
}

export default TableCell;
