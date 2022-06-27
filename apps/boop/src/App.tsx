import React from "react";
import { Table, Button } from 'ui';
import { useStore } from 'store';

const App = () => {
    const {counter, increment} = useStore()
  
  return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>BOOP APP</div>
        <Button handleClick={increment} label = "Hard like"/>
     <Table /> 
  </div>
)};

export default App
