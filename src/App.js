import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom';
import Board from './Components/Board';
import Board2 from './Components/Board2';
import Home from './Components/Home';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {
      path: '/1v1',
      element: <Board />,
    },
    {
      path: '1vC',
      element: <Board2 />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Board /> */}
    </>
  );
}

export default App;
