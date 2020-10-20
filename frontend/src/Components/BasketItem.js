import React, { useState } from 'react';

const BasketItem = (props) => {

  let [ count, setCount ] = useState(1);
  const [ price, setPrice ] = useState(props.price);


  const addCount = () => {
    count += 1;
    setCount(count);
    setPrice(props.price * count);
  };
  const restCount = () => {
    count -= 1;
    setCount(count);
    setPrice(props.price * count);
  };

    return (
      <React.Fragment>
        
      {(count >=1) &&
        <div class="list-group-item d-flex justify-content-between align-items-center">
        {props.name} {price} €
        <button type="button" class="btn btn-primary btn-sm" onClick={()=>addCount()}>
          +
        </button>
        <button id="minusButton"type="button" class="btn btn-danger btn-sm" onClick={()=>restCount()} >
          -
        </button>
        <span class="badge badge-primary badge-pill">{count}</span>
        </div>
      }
      </React.Fragment>
    );

}

export default BasketItem;