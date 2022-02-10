import React, { useEffect, useState } from "react";
import Square from "./Square";
import winningCond from "../helpers";

// makes array of undefineds
const squares = [
  // ...Array(42), => undefined
  ...new Array(42).fill(null),
  "taken",
  "taken",
  "taken",
  "taken",
  "taken",
  "taken",
  "taken",
];
// const array = new Array(42); => makes empty array

// const initState = {
//   squares: squares,
//   style: "",
// };

const Playground = () => {
  const [squareChange, setSquareChange] = useState(squares);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handlePlayerChanges = (index) => {
    // console.log("Square is " + index);
    const squareSelect = [...squareChange];
    if (winningCond(squareSelect)) {
      return;
    }
    // const styled = { backgroundColor: "red" };
    // squareSelect[index] = styled;

    if (squareSelect[index + 7]?.includes("taken")) {
      if (currentPlayer === 1 && !squareSelect[index]) {
        setCurrentPlayer(2);
        squareSelect[index] = `player-one taken`;
        // squareSelect[index] = `player-one`;
        // squareSelect[index] = squareSelect[index] + ` taken`;
      }
      if (currentPlayer === 2 && !squareSelect[index]) {
        setCurrentPlayer(1);
        squareSelect[index] = `player-two taken`;
        // squareSelect[index] = `player-two`;
        // squareSelect[index] = squareSelect[index] + ` taken`;
      }
    } else alert("Cant go here");
    setSquareChange(squareSelect);
    // setSquareChange((oldstate) => ({ ...oldstate, squares: squareSelect }));
    // console.log(squareChange);
  };

  let result;
  let color;
  if (winningCond(squareChange)) {
    let showWinner;
    if (winningCond(squareChange).includes("player-one")) {
      showWinner = "player-one";
      color = "red";
    } else {
      showWinner = "player-two";
      color = "blue";
    }
    result = "Winner is " + showWinner;
  }

  return (
    <>
      {result ? (
        <h3 style={{ color: color }}>{result}</h3>
      ) : (
        <h3>The current Player is: {currentPlayer}</h3>
      )}

      <div className="grid">
        {squareChange.map((item, index) => {
          return (
            <Square
              // style={item}
              className={`square ${item}`}
              onClick={() => handlePlayerChanges(index)}
              key={index}
              // i={index}
            />
          );
        })}
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        {/* <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div>
        <div className="taken"></div> */}
      </div>
    </>
  );
};

export default Playground;
