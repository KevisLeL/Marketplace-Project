import React, { useState, useEffect } from 'react';
import Basket from '../Components/Basket';
import ItemsList from '../Components/ItemsList';

const HomePage = () => {

const [items, setItems] = useState([0]);
const [basketList, setBasketList] = useState([]);
const [ idArr, setIdArr ] = useState([]);
const [ priceArr, setPriceArr ] = useState([]);

const fetchItems = async () => { 
    try {
      const responseData = await fetch(
        "http://localhost:5000/api/"
        ).then((resp) => resp.json());
        setItems(responseData.items);
      } catch(err) {
        alert('Something went wrong, please try again')
        console.log(err);
      }
    };
   
    useEffect(()=> {
      
      fetchItems();

  }, [])


const addToCartHandler = (item) =>{
  const cart = [...basketList];
  cart.push(item);
  setBasketList(cart);

  const newIdArr = [...idArr];
  newIdArr.push(item.id);
  setIdArr(newIdArr);

  const newPriceArr = [...priceArr];
  newPriceArr.push(item.price);
  setPriceArr(newPriceArr);
}


    return (
       <React.Fragment>
           <Basket items={basketList} idArr={idArr} priceArr={priceArr}/>
           <ItemsList items={items} add={addToCartHandler}/>
       </React.Fragment>
    )
};

export default HomePage;