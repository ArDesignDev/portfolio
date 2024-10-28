// CustomArrow.js
import React from 'react';
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <LiaArrowAltCircleRightSolid />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <LiaArrowAltCircleRightSolid style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
};

export { NextArrow, PrevArrow };
