import React from 'react';

const ShuffleBtn = ({changeIndex, randomColorIndex}) => {
    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#93022f",
        "#6ce1c4"
      ];
    return (
        <div className='QuoteBox-content-button'>
           <button onClick={changeIndex} style={{color: `${colors[randomColorIndex]}`}}><i className="fa-solid fa-shuffle"></i></button> 
        </div>
    );
};

export default ShuffleBtn;