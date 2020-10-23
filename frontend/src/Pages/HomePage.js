import React, { useState, useEffect } from 'react';
import Basket from '../Components/Basket';
import ItemsList from '../Components/ItemsList';

const HomePage = () => {
  const [items, setItems] = useState([0]);
  const [basketList, setBasketList] = useState([]);

  const fetchItems = async () => {
    try {
      const responseData = await fetch(
        "http://localhost:5000/api/"
      ).then((resp) => resp.json());
      setItems(responseData.items);
    } catch (err) {
      alert("Something went wrong, please try again");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addToCartHandler = (item) => {
    const cart = [...basketList];
    const basketItem = {
      amount: 1,
      id: item.id,
      name: item.name,
      price: item.price,
    };
    cart.push(basketItem);
    setBasketList(cart);
  };

  const addCountHandler = (id) => {
    const updatedBasketlist = [...basketList];
    const item = updatedBasketlist.find((e) => e.id === id);
    item.amount++;
    setBasketList(updatedBasketlist);
  };
  const restCountHandler = (id) => {
    const updatedBasketlist = [...basketList];
    const item = updatedBasketlist.find((e) => e.id === id);
    item.amount -= 1;
    setBasketList(updatedBasketlist);
  };

  return (
    <React.Fragment>
      <Basket
        items={basketList}
        addCount={addCountHandler}
        restCount={restCountHandler}
      />
      <ItemsList items={items} add={addToCartHandler} />
    </React.Fragment>
  );
};

export default HomePage;