import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import BasketItem from '../Components/BasketItem';

const PaymentPage = ({location}) => {
  const [idPrice, setIdPrice] = useState(0)


  const totalPrice = () => {
  let totalPrice = location.state.items.reduce((sum, value) => ( sum + value.price ), 0);
  setIdPrice(totalPrice);
  };

  const checkPrices = async() => {
    let idArr = location.state.idArr;
    // let priceArr = location.state.priceArr;
    // let realPrices = [];

    const responseData = await fetch(
      "http://localhost:5000/api/payment", {
              method: 'POST',
              body: JSON.stringify({
                id: idArr,
              }),
              headers: {
                'Content-Type': "application/json"
              }
            }
    ).then(res => res.json());

    console.log(responseData);

    // await Promise.all(idArr.map(id => fetch(
    //   "http://localhost:5000/api/payment", {
    //           method: 'POST',
    //           body: JSON.stringify({
    //             id: id,
    //           }),
    //           headers: {
    //             'Content-Type': "application/json"
    //           }
    //         }
    //         ))).then(responses =>
    //   Promise.all(responses.map(res => res.json())).then(price => prices = price ));
    
    //   for (let i in prices) {
    //     realPrices.push(prices[i].price);
    //   }

    //   let totalRealPrice = realPrices.reduce((sum, value) => ( sum + value ), 0);

    //   console.log(totalRealPrice);
      
    // if(totalRealPrice === idPrice){
    //   return alert('Thanks for purchasing amazing shit on KiviZon')
    // } else {
    //   return alert('SOMETHING WENT WRONG, PLEASE TRY AGAIN')
    // }
  };
  
  useEffect(() => totalPrice());

    return (
      <React.Fragment>
        
        <div class="card border-dark mb-3 ">
        <div class="card-header">
          <h5>Basket List</h5>
        </div>
        <div class="card-body text-dark">
          <ul class="list-group">
            
            {location.state.items.map((item, index) => (
              <li
                value={index}
                class="mx-2 my-2 p-2 card"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <BasketItem
                  key={item.name}
                  name={item.name}
                  price={item.price}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
        <div
          class="card m-3 w-75"
          style={{
            backgroundColor: "whiteSmoke",
            position: "static",
            left: "0px",
          }}
        >
          <div class="card-body d-inline">
            <h5 class="card-title d-inline p-4">TOTAL: {idPrice}€</h5>
          </div>
        </div>

        <div
          class="card m-3 w-75"
          style={{
            backgroundColor: "whiteSmoke",
            position: "static",
            left: "0px",
          }}
        >
          <div class="card-body d-inline">
            <Link type="button" class="btn btn-warning " to="/" onClick={() => checkPrices()}>
              PAY
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
};

export default PaymentPage;