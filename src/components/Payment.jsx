import React from "react";
import { enableDisablePayment } from "../redux/Reducers";
import { useDispatch } from "react-redux";

const Payment = () => {


  const dispatch= useDispatch()
  return (
    <div className="paymentParentDiv">

        <div className="paymentMode">

           <div>
           <input className="paymentModeInput" type="radio" />
           <label  className="paymentModeLabel">Cash on Delivery</label>
           </div>

           <div>
           <input className="paymentModeInput" defaultChecked value={true} type="radio" />
           <label className="paymentModeLabel">Credit Card</label>
           </div>

        </div>

      <div className="payment">
        <div className="">
          <label className="paymentLabel">Enter your card number:</label>
          <br />
          <input className="paymentInput" type="number" placeholder="Card Number" />
        </div>

        <div>
          <label  className="paymentLabel">Enter your card expiry date:</label>
          <br />
          <input className="paymentInput" type="number" placeholder="Expiry Date" />
        </div>

        <div>
          <label  className="paymentLabel">Enter your CVV nbumber:</label>
          <br />
          <input className="paymentInput" type="number" placeholder="CVV" />
        </div>

      </div>

      <div>
        <button className="confirmBtn" onClick={()=>dispatch(enableDisablePayment(false))}>Confirm Payment</button>
      </div>



    </div>
  );
};

export default Payment;
