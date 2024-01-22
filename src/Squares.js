// import { useState, useEffect } from "react"
// const Squares = ({ setPlayerWon, setCurrentPlayer, currentPlayer, onClick }) => {
//     const [value1, setValue1] = useState('')
//     const [value2, setValue2] = useState('')
//     const [value3, setValue3] = useState('')
//     const [value4, setValue4] = useState('')
//     const [value5, setValue5] = useState('')
//     const [value6, setValue6] = useState('')
//     const [value7, setValue7] = useState('')
//     const [value8, setValue8] = useState('')
//     const [value9, setValue9] = useState('')

//     const handleClick1 = () => {
//         if (value1 === 'o' || value1 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue1('o')
//             console.log(value1)
//             if (value1 === value2 && value2 === value3 && value1 == value3) {
//                 console.log('connect', value1, value2, value3)
//             }
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue1('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick2 = () => {
//         if (value2 === 'o' || value2 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue2('o')
//             setCurrentPlayer('crosses')
//             if (value1 === value2 && value2 === value3) {
//                 console.log('connect', value1, value2, value3)
//             }
//         }
//         else {
//             setValue2('x')
//             setCurrentPlayer('noughts')
//         }

//     }
//     const handleClick3 = () => {
//         if (value3 === 'o' || value3 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue3('o')
//             setCurrentPlayer('crosses')
//             if (value1 === value2 && value2 === value3 && value1 == value3) {
//                 console.log('connect', value1, value2, value3)
//             }
//         }
//         else {
//             setValue3('x')
//             setCurrentPlayer('noughts')
//         }

//     }

//     const handleClick4 = () => {
//         if (value4 === 'o' || value4 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue4('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue4('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick5 = () => {
//         if (value5 === 'o' || value5 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue5('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue5('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick6 = () => {
//         if (value6 === 'o' || value6 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue6('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue6('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick7 = () => {
//         if (value7 === 'o' || value7 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue7('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue7('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick8 = () => {
//         if (value8 === 'o' || value8 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue8('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue8('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     const handleClick9 = () => {
//         if (value9 === 'o' || value9 === 'x') {
//         } else if (currentPlayer === 'noughts') {
//             setValue9('o')
//             setCurrentPlayer('crosses')
//         }
//         else {
//             setValue9('x')
//             setCurrentPlayer('noughts')
//         }
//     }

//     return (
//         <>
//             <div className="square 1" onClick={handleClick1}>
//                 <span>1</span>
//                 <h1>{value1}</h1>
//             </div>

//             <div className="square 2" onClick={handleClick2}>
//                 <span>2</span>
//                 <h1>{value2}</h1>
//             </div>

//             <div className="square 3" onClick={handleClick3}>
//                 <span>3</span>
//                 <h1>{value3}</h1>
//             </div>

//             <div className="square 4" onClick={handleClick4}>
//                 <span>4</span>

//                 <h1>{value4}</h1>
//             </div>

//             <div className="square 5" onClick={handleClick5}>
//                 <span>5</span>
//                 <h1>{value5}</h1>
//             </div>

//             <div className="square 6" onClick={handleClick6}>
//                 <span>6</span>
//                 <h1>{value6}</h1>
//             </div>

//             <div className="square 7" onClick={handleClick7}>
//                 <span>7</span>
//                 <h1>{value7}</h1>
//             </div>

//             <div className="square 8" onClick={handleClick8}>
//                 <span>8</span>
//                 <h1>{value8}</h1>
//             </div>

//             <div className="square 9" onClick={handleClick9}>

//                 <span>9</span>
//                 <h1>{value9}</h1>
//             </div>
//         </>
//     )
// }
// export default Squares

import { useState, useEffect } from "react";
const Squares = ({ setPlayerWon, setCurrentPlayer, currentPlayer }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");

  const resetGame = () => {
    setPlayerWon("");
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    setValue6("");
    setValue7("");
    setValue8("");
    setValue9("");
  };

  const handleClick = (value, setValue) => {
    if (value === "o" || value === "x") {
      return;
    } else if (currentPlayer === "noughts") {
      setValue("o");
      setCurrentPlayer("crosses");
    } else {
      setValue("x");
      setCurrentPlayer("noughts");
    }
  };

  useEffect(() => {
    // Check for winning conditions
    if (
      (value1 !== "" && value1 === value2 && value2 === value3) ||
      (value1 !== "" && value1 === value4 && value4 === value7) ||
      (value1 !== "" && value1 === value5 && value5 === value9) ||
      (value2 !== "" && value2 === value5 && value5 === value8) ||
      (value3 !== "" && value3 === value6 && value6 === value9) ||
      (value3 !== "" && value3 === value5 && value5 === value7) ||
      (value7 !== "" && value7 === value8 && value8 === value9) ||
      (value4 !== "" && value4 === value5 && value5 === value6)
    ) {
      // setPlayerWon(!currentPlayer)

      if (currentPlayer === "crosses") {
        setPlayerWon("NOUGHTS WIN THE GAME");
      } else if (currentPlayer === "noughts") {
        setPlayerWon("CROSSES WIN THE GAME");
      }
    }
  }, [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    currentPlayer,
    setPlayerWon,
  ]);

  return (
    <>
      <button className='reset' onClick={resetGame}>
        reset
      </button>
      <div className='squares'>
        <div
          className={`square 1 
                ${
                  value1 !== "" && value1 === value2 && value2 === value3
                    ? "connected"
                    : ""
                }
                ${
                  value1 !== "" && value1 === value4 && value4 === value7
                    ? "connected"
                    : ""
                }
                ${
                  value1 !== "" && value1 === value5 && value5 === value9
                    ? "connected"
                    : ""
                }
                
           `}
          onClick={() => handleClick(value1, setValue1)}>
          <span>1</span>
          <h1>{value1}</h1>
        </div>

        <div
          className={`square 2 
             ${
               value1 !== "" && value1 === value2 && value2 === value3
                 ? "connected"
                 : ""
             }
             ${
               value2 !== "" && value2 === value5 && value5 === value8
                 ? "connected"
                 : ""
             }
             `}
          onClick={() => handleClick(value2, setValue2)}>
          <span>2</span>
          <h1>{value2}</h1>
        </div>

        <div
          className={`square 3 
            ${
              value1 !== "" && value1 === value2 && value2 === value3
                ? "connected"
                : ""
            }
            ${
              value3 !== "" && value3 === value6 && value6 === value9
                ? "connected"
                : ""
            }
            ${
              value3 !== "" && value3 === value5 && value5 === value7
                ? "connected"
                : ""
            }
            `}
          onClick={() => handleClick(value3, setValue3)}>
          <span>3</span>
          <h1>{value3}</h1>
        </div>

        <div
          className={`square 4
             ${
               value4 !== "" && value4 === value5 && value5 === value6
                 ? "connected"
                 : ""
             }
             ${
               value1 !== "" && value1 === value4 && value4 === value7
                 ? "connected"
                 : ""
             }
             
             `}
          onClick={() => handleClick(value4, setValue4)}>
          <span>4</span>
          <h1>{value4}</h1>
        </div>

        <div
          className={`square 5
             ${
               value4 !== "" && value4 === value5 && value5 === value6
                 ? "connected"
                 : ""
             }
             ${
               value1 !== "" && value1 === value5 && value5 === value9
                 ? "connected"
                 : ""
             }
             ${
               value2 !== "" && value2 === value5 && value5 === value8
                 ? "connected"
                 : ""
             }
             ${
               value3 !== "" && value3 === value5 && value5 === value7
                 ? "connected"
                 : ""
             }
             `}
          onClick={() => handleClick(value5, setValue5)}>
          <span>5</span>
          <h1>{value5}</h1>
        </div>

        <div
          className={`square 6
             ${
               value4 !== "" && value4 === value5 && value5 === value6
                 ? "connected"
                 : ""
             }
             ${
               value3 !== "" && value3 === value6 && value6 === value9
                 ? "connected"
                 : ""
             }
             `}
          onClick={() => handleClick(value6, setValue6)}>
          <span>6</span>
          <h1>{value6}</h1>
        </div>

        <div
          className={`square 7
             ${
               value1 !== "" && value1 === value4 && value4 === value7
                 ? "connected"
                 : ""
             }
             ${
               value3 !== "" && value3 === value5 && value5 === value7
                 ? "connected"
                 : ""
             }
             ${
               value7 !== "" && value7 === value8 && value8 === value9
                 ? "connected"
                 : ""
             }
            `}
          onClick={() => handleClick(value7, setValue7)}>
          <span>7</span>
          <h1>{value7}</h1>
        </div>

        <div
          className={`square 8
            ${
              value2 !== "" && value2 === value5 && value5 === value8
                ? "connected"
                : ""
            }
            ${
              value7 !== "" && value7 === value8 && value8 === value9
                ? "connected"
                : ""
            }
            `}
          onClick={() => handleClick(value8, setValue8)}>
          <span>8</span>
          <h1>{value8}</h1>
        </div>

        <div
          className={`square 9
            ${
              value1 !== "" && value1 === value5 && value5 === value9
                ? "connected"
                : ""
            }
            ${
              value3 !== "" && value3 === value6 && value6 === value9
                ? "connected"
                : ""
            }
            ${
              value7 !== "" && value7 === value8 && value8 === value9
                ? "connected"
                : ""
            }
            `}
          onClick={() => handleClick(value9, setValue9)}>
          <span>9</span>
          <h1>{value9}</h1>
        </div>
      </div>
    </>
  );
};

export default Squares;
