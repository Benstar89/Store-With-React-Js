import React, { useContext } from 'react';

//Components
import Cart from '../Shared/Cart';
//Context
import { CartContext } from '../Context/CardContextProvider';
//SPA
import {Link} from "react-router-dom";
//Styles
import styled from "../Styles/ShopCart.module.css";


const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styled.container}>
            <div className={styled.cartContainer}>
                {state.selectedItems.map(item => <Cart key = {item.id} data = {item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styled.payments}>
                    <p><span>Total Items: </span> {state.itemsCounter}</p>
                    <p><span>Total Payments: </span> {state.total} $</p>
                    <div className={styled.buttonContainer}>
                        <button className={styled.clear} onClick={() => dispatch({type : "CHECKOUT"})}>Check Out</button>
                        <button className={styled.checkout}onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styled.complete}>
                    <h3>Want to Buy</h3>
                    <Link to = "/products">Go to Shop</Link>
                </div>
            }
            {
                state.checkout && <div className={styled.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to = "/products">Buy More</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;