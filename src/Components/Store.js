import React , {useContext} from 'react';

//Context
import { ProductContext } from '../Context/ProductContextProvider';
//Components
import Product from "../Shared/Product";
//Styles
import styled from "../Styles/Store.module.css";

const Store = () => {
    const products = useContext(ProductContext)

    return (
        <div className={styled.container}>
            {products.map(product => <Product key = {product.id} productData = {product}/>)}
        </div>
    );
};

export default Store;