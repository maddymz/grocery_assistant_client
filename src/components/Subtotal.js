import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../service/StateProvider';
import { getBasketTotal } from '../service/Reducer';

function Subtotal() {
  const[{basket}, dispach] = useStateValue(); 

  const calculateBasketTotal = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className='subtotal'>

        <CurrencyFormat renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>

            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // TODO
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
      <button>Proceede to Checkout</button>
    </div>
  )
}

export default Subtotal
