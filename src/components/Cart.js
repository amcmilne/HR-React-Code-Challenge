import React from 'react'

function Cart(props) {
    const { storedSundaes } = props;

    // console.log(props.cart)
    return (
        <div>
            <ul>{storedSundaes}</ul>
        </div>
    )
}

export default Cart
