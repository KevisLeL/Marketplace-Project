import React, { useState } from "react";
import Item from "./Item";

const ItemsList = (props) => {
  const [clickedIndex, setClickedIndex] = useState(0);

  if (props.items) {
    return (
      <React.Fragment>
        <div class="row row-cols-3">
          {props.items.map((item, index) => (
            <li value={index} class="col-3 mx-5 my-4 p-3 card h-100 w-100">
              <Item
                key={item.id}
                name={item.name}
                price={item.price}
                size={item.size}
                color={item.color}
                material={item.material}
                image={item.image}
              />

              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-outline-warning d-inline"
                  data-toggle="modal"
                  data-target="#seeMatchModal"
                  onClick={() => setClickedIndex(index)}
                >
                  Info
                </button>

                <button
                  type="button"
                  class="btn btn-outline-dark d-inline align-right"
                  onClick={() => props.add(props.items[index])}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </div>
        <div
          class="modal fade"
          id="seeMatchModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="seeMatchModalLabel">
                  {props.items[clickedIndex].name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Precio: {props.items[clickedIndex].price} €
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="champion">
                      Talla: {props.items[clickedIndex].size}
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="kills">
                      Color: {props.items[clickedIndex].color}
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="damage">
                      Materiales: {props.items[clickedIndex].material}
                    </label>
                  </div>
                  <div class="card-footer">
                    <button
                      type="button"
                      class="btn btn-outline-dark d-inline align-right"
                      onClick={() => props.add(props.items[clickedIndex])}
                    >
                      AÑADIR A CARRITO
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default ItemsList;
