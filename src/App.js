import React from 'react';
import Table from './components/table/Table';

function App() {
  const products = [
    { name: 'Apple', price: 3 },
    { name: 'Orange', price: 4 },
    { name: 'Lemon', price: 2 },
    { name: 'Banana', price: 6 },
    { name: 'Grapes', price: 3 },
    { name: 'Pineapple', price: 3 },
    { name: 'Strawberry', price: 4 },
  ];
  return (
    <div className="App">
      <Table labels={['#', 'Product', 'Price']} items={products} />
    </div>
  );
}

export default App;
