import React from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/Reducers";

const DisplayItems = () => {
  const shoes = [
    {
      name: "Air Max 270",
      price: 150,
      img: "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    },
    {
      name: "Nike Air Force 1",
      price: 120,
      img: "https://t4.ftcdn.net/jpg/05/06/36/71/360_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg",
    },
    {
      name: "Adidas Ultraboost",
      price: 180,
      img: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
    },
    {
      name: "Puma RS-X",
      price: 130,
      img: "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg",
    },
    {
      name: "Converse Chuck Taylor",
      price: 80,
      img: "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
    },
  ];

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addData(item));
  
  };

  return (
    <>
      {shoes.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="imgDiv">
              <img src={item.img} alt="img" />
            </div>
            <div className="content">
              <h2>{item.name}</h2>
              <p>{`$ ${item.price}`}</p>
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayItems;
