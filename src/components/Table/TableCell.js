import React from 'react';
import './TableCell.css';

function TableCell({ data }) {
  return (
    <div className="TableCell">
      <div className="TableCell-line">
        <p>{data}</p>
      </div>
      <div className="TableCell-line">
        <p>{data}</p>
      </div>
    </div >
  );
}

export default TableCell;
