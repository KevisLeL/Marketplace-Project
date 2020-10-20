import React  from 'react';

const Item = (props) => {

    return (
      <React.Fragment>
        <div>
          <img class="card-img-top" src={props.image} alt={props.image} width="75" height="200"/>
          <div class="card-body">
            <h4 class="card-title">
              <p>{props.name}</p>
            </h4>
            <h5>{props.price}€</h5>
          </div>
        </div>
      </React.Fragment>
    );
};

export default Item;