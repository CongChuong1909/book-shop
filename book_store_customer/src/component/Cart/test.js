import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [tables, setTables] = useState([
    { id: 'table1', name: 'Table 1' },
    { id: 'table2', name: 'Table 2' },
    { id: 'table3', name: 'Table 3' },
    // Add more tables here
  ]);

  const handleButtonClick = button => {
    setSelectedButton(button);
  };

  return (
    <div>
      {tables.map(table => (
        <button key={table.id} onClick={() => handleButtonClick(table.id)}>
          Show {table.name}
        </button>
      ))}
      {tables.map(table => (
        <table key={table.id} style={{ display: selectedButton === table.id ? 'block' : 'none' }}>
          show {table.name}
        </table>
      ))}
    </div>
  );
};

export default MyComponent;