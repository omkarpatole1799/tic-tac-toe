import Box from './Box';

const Board = () => {
  return (
    <>
      <div className="bg-blue-500 w-60 h-60 flex items-center justify-center text-white font-bold text-3xl">
        <div className="">
          <Box
            value="0"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="0"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
        </div>
        <div className="">
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
        </div>
        <div className="">
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
          <Box
            value="X"
            className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
          />
        </div>
      </div>
    </>
  );
};
export default Board;
