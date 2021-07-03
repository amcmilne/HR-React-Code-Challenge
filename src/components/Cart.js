import React from "react";

function Cart(props) {
  const { cartItem } = props;
  console.log(cartItem);

  return (
    <aside className="block">
      <h1 className="cart">Your Treats!</h1>
      <div>
        {cartItem.length === 0 && <div className="cart-empty">Cart is Empty</div>}
        {/* {cartItem.map((sundae) => (
          <div key={sundae.id} className="row">
            <div className="col-2">{sundae}</div>
          </div>
        ))} */}

        {cartItem.length === 0 && (
          <>
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;
