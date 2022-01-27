import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {createProductAction} from '../../actions';

function AddProduct(props){
    const {createProduct} = props;
    const inputProduct = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(inputProduct.current.value);
    }

    return (
        <> 	
            <form ref = {inputProduct} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="description" placeholder="some description" />
                <input type="text" name="price" placeholder="$"/>
                <input type="file" id="input" multiple />

                <input type="submit" value="Send ->" />
            </form>
        </>);

}


const mapStateToProps = (state) => state.product;

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: data => {
            dispatch(createProductAction(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);