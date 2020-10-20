import React from 'react';
import { Link } from 'react-router-dom';
import BasketItem from './BasketItem';

const Basket = (props) => {

    return (
      <div class="card border-dark mb-3 ">
        <div class="card-header">
          <h5>Basket List</h5>
        </div>
        <div class="card-body text-dark">
          <ul class="list-group">
            {props.items.map((item, index) => (
              <li
                value={index}
                class="mx-2 my-2 p-2 card"
                style={{ backgroundColor: "whitesmoke" }}
                > 
                <BasketItem
                key={item.name}
                name={item.name}
                price={item.price}
                size={item.size}
                color={item.color}
                material={item.material}
                count={item.count}
                />
              </li>
            ))}
          </ul>
        </div>
        <div class="card-footer d-inline">
          <Link
            type="button"
            class="btn btn-warning "
            to={{
              pathname: "/payment",
              state: { items: props.items, idArr: props.idArr, priceArr: props.priceArr },
            }}
          >
            Go to Payment
          </Link>
        </div>
      </div>
    );
};

export default Basket;