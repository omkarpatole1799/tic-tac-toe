import React from 'react';
import {Link} from 'react-router-dom';
import Button from './UI/Button';

function Home() {
  return (
    <>
      <h2 className="font-bold text-2xl">Welcome to TIC - TAC - TOE</h2>
      <h4 className="font-semibold ">Choose Game mode</h4>
      <Link to="/1v1">
        <Button className="m-3">Player vs Player</Button>
      </Link>
      <Link to="/1vC">
        <Button className="m-3">Player vs Computer</Button>
      </Link>
    </>
  );
}

export default Home;
