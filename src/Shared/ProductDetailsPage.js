import React ,{useContext} from 'react';

//SPA-Packages
import {Link , useParams} from "react-router-dom";

//Context
import { ProductContext } from '../Context/ProductContextProvider';
//Helper-Functions

import { shorten } from '../Helper/functions';
const ProductDetailsPage = (props) => {
    const params = useParams();
    const products = useContext(ProductContext);
    const id = params.id;
    const product = id - 1; 
    const mainProducts = products[product];

    return (
        <div>
            <img src = {mainProducts.image} alt = "product"/>
            <h3>{shorten(mainProducts.title)}</h3>
            <p>{mainProducts.description}</p>
            <p>{mainProducts.price} $</p>
            <Link to = "/products">Go To Shop</Link>
        </div>
    );
};

export default ProductDetailsPage;