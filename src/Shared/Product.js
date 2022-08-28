import React , {useContext} from 'react';

//SPA
import { Link } from 'react-router-dom';
//Functions
import { shorten , isInCart , quantityCount} from '../Helper/functions';
//Styles
import styled from "../Styles/Product.module.css";
//Context
import { CartContext } from '../Context/CardContextProvider';
//Icons
import TrashIcon from "../assets/Icons/trash.svg";

const Product = ({productData}) => {
    const {state , dispatch} = useContext(CartContext);

    return (
        <div className={styled.container}>
            <img className={styled.cardImage} src = {productData.image} alt = "product" style = {{width : "200px" , height: "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styled.linkContainer}>
                <Link to = {`/products/${productData.id}`}>Details</Link>
                <div className={styled.buttonContainer}>
                {quantityCount(state , productData.id) > 1 && <button className={styled.smallButton} onClick={() => dispatch({type : "DECREASE" , payload : productData})}>-</button>}
                {quantityCount(state , productData.id) === 1 && <button className={styled.smallButton} onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src = {TrashIcon}/></button>}
                {quantityCount(state , productData.id) > 0 && <span className={styled.counter}>{quantityCount(state, productData.id)}</span>}
                {
                    isInCart(state, productData.id) ?
                    <button className={styled.smallButton} onClick={() => dispatch({type : "INCREASE" , payload : productData})}>+</button>:
                    <button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})}>Add in Cart</button>
                }
                </div>
            </div>
        </div>
    );
};

export default Product;