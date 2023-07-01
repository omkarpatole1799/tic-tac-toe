import React from 'react';

function Navbar() {
  return (
    <>
      <ul className="flex bg-blue-500 text-white">
        <li className="p-2  font-semibold">
          <h3>TIC_TAC_TOE</h3>
        </li>
        <li className="p-2">Home</li>
        <li className="p-2">Game Mode</li>
      </ul>
    </>
  );
}

export default Navbar;
