import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className="border-2 bg-blue-500 text-white font-semibold p-2 rounded-2xl">
      {props.children}
    </button>
  );
}

export default Button