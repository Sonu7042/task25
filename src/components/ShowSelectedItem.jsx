import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, enableDisablePayment} from "../redux/Reducers";

const ShowSelectedItem = () => {

  
  const selectedData = useSelector((state) => state.selectedData);
  const total = useSelector((state) => state.total);
  const show = useSelector((state) => state.show);
  
  const  dispatch = useDispatch();


  const increaseBtn = (cartItem) => {
    dispatch(increaseItem(cartItem));
  
  };


  const decreaseBtn = (cartItem) => {
   dispatch(decreaseItem((cartItem)))
   
  };


  return (
    <>
      <div className="AddToCart">
        <h2>Cart</h2>
        {selectedData.map((cartItem, index) => (
          <div className="addItemDiv" key={index}>
            <div className="imgAndname">
              <img src={cartItem.img} alt="img" />
              <h3>{cartItem.name}</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>{`$ ${cartItem.price}`}</p>

              <div className="buttonDiv">
                <button onClick={() => decreaseBtn(cartItem)}>-</button>
                <p>{cartItem.quantity}</p>
                <button onClick={() => increaseBtn(cartItem)}>+</button>
              </div>
            </div>
          </div>
        ))}

        <p> Total: $ {total} </p>

        <div className="paymentDiv">
          
          
          <Link to={show?"/payment":""}>
            <button className="paymentBtn"   onClick={()=>dispatch(enableDisablePayment(true))}>Proceed to Payment</button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default ShowSelectedItem;
