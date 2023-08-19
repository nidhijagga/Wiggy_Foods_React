import React from 'react';

const FoodItemsCard = ({ name, description, imageId, price }) => {
  const truncatedDescription = description.length > 40 ? description.slice(0, 40) + '...' : description;

  return (
    <div className="w-72 h-96 m-2 p-2 border-2 border-black">
      {imageId && (
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          alt=""
          className="w-full h-2/3"
        />
      )}

      <div>
        <h2 className='font-bold text-lg'>{name}</h2>
        <h3>{truncatedDescription}</h3>
        <h4>Rs. {price / 100}</h4>
      </div>
    </div>
  );
};

export default FoodItemsCard;
