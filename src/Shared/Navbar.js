import React , {useContext} from 'react';
import {Link} from "react-router-dom";
//Context
import { CartContext } from '../Context/CardContextProvider';
//Icons
import ShopIcon from "../assets/Icons/shop.svg"
//Style
import styled from "../Styles/Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div className={styled.mainContiner}>
            <div className={styled.container}>
                <Link className = {styled.productLink}to = "/products">Products</Link>
                <div className={styled.iconContainer}>
                    <Link to = "/cart"><img src = {ShopIcon} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;