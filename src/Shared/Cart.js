import React , {useContext} from 'react';

//Context
import { CartContext } from '../Context/CardContextProvider';
//Functions
import { shorten } from '../Helper/functions';
//Styles
import styled from "../Styles/Cart.module.css";
//Icon
import TrashIcon from "../assets/Icons/trash.svg";

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image , title , price , quantity} = props.data;

    return (
        <div className={styled.container}>
            <img className={styled.productImage} src = {image} alt = "product"/>
            <div className={styled.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styled.quantity}>{quantity}</span>
            </div>
            <div className={styled.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick = {() => dispatch({type: "DECREASE" , payload : props.data})}>-</button>:
                    <button onClick = {() => dispatch({type: "REMOVE_ITEM" , payload : props.data})}><img src ={TrashIcon}/></button>
                }
                <button onClick={() => dispatch({type : "INCREASE" , payload : props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;