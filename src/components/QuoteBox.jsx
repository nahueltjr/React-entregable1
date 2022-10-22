import React from 'react';
import quotes from '../quotes.json'

const QuoteBox = ({index}) => {
   
    return (
        <div className='QuoteBox-content'>
            <div className='QuoteBox-content-text'>
                <i className="fa-solid fa-quote-left"></i>
                <p>{quotes[index].quote}</p>
            </div>
            <div className='QuoteBox-content-author'>
                <p>{quotes[index].author}</p>
            </div>
        </div>
    );
};

export default QuoteBox;