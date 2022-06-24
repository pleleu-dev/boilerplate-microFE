import React, { useState } from "react";

type BoopProps = {
  value : number
}

const BoopBtn = ({value}: BoopProps) => {
  const [state, setState ] = useState(value)
  const handleClick = () =>{
      setState(state + 1)
  }
  
  return (
  <div className="text-gray-500 font-bold">
      <button onClick={handleClick}>Boop</button>

      <p>
        The boop is : {state}
      </p>
  </div>
)};

export default BoopBtn;
