import React from "react";

const Square = ({ i, onClick, className }) => {
  // console.log(item);
  // const handleClick = (i) => {
  //   console.log("You have clicked on " + i + " square");
  // };

  return <div className={className} onClick={onClick}></div>;
};

export default Square;
