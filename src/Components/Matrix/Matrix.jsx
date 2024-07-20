import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const initialMatrix = Array(3).fill(null).map(() => Array(3).fill('white'));
  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] === 'white') {
      const newMatrix = matrix.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? 'green' : c))
      );
      setMatrix(newMatrix);
      const newClickOrder = [...clickOrder, [row, col]];
      setClickOrder(newClickOrder);

      if (newClickOrder.length === 9) { // The ninth click
        setTimeout(() => {
          const updatedMatrix = initialMatrix.map(row => row.slice());
          newClickOrder.forEach(([r, c], index) => {
            setTimeout(() => {
              updatedMatrix[r][c] = 'orange';
              setMatrix([...updatedMatrix]);
            }, index * 500); 
          });
        }, 500);
      }
    }
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Matrix;
