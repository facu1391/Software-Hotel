import React from 'react';

const CardItem = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[249px] h-[280px] bg-white shadow-xl mt-8">
      <img className="w-[100px] h-[100px]" src={image} alt="Card" />
      <div className="flex flex-col items-center justify-center text-[#1F1F1F]">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardItem;