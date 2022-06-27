import * as React from "react";

export interface IButton {
  handleClick : () => void,
  label : string
}

const Button = ({handleClick, label} :  IButton) => {
  return (
    <button className="mt-3 p-4 rounded-xl bg-gray-200 hover:bg-gray-400 cursor-pointer" onClick={handleClick}>{label}</button>
  )
}

export {Button};


