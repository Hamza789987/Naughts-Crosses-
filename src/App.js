import "./App.css";
import Game from "./Game";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h2 className='title'>
                Welcome to my noughts and crosses/Tic Tac Toe project on React
              </h2>
              <button className='play'>
                <Link to='/Play'>Let's Play!</Link>
              </button>
            </>
          }
        />
        <Route path='/Play' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
