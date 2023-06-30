import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className="p-1 bg-gray-500 text-white">
      {props.children}
    </button>
  );
}

export default Button