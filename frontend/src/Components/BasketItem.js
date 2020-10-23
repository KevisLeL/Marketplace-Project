import React from 'react';

const BasketItem = (props) => {

  let price= props.price * props.amount;

    return (
      <React.Fragment>
        
      {(props.amount >=1) &&
        <div class="list-group-item d-flex justify-content-between align-items-center">
        {props.name} {price} €
        <button type="button" class="btn btn-primary btn-sm" onClick={()=>props.addCount(props.id)}>
          +
        </button>
        <button id="minusButton"type="button" class="btn btn-danger btn-sm" onClick={()=>props.restCount(props.id)} >
          -
        </button>
        <span class="badge badge-primary badge-pill">{props.amount}</span>
        </div>
      }
      </React.Fragment>
    );

}

export default BasketItem;