import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function ProductsList(props) {
  const { products, isFetching, error, getProducts } = props;

  useEffect(() => {
    getProducts();
  }, []);

  const mapProduct = ({ id, name, description, price, images }) => {
    return (
      <li key={id}>
        {images} Name: {name} Description: {description} Price: {price}
      </li>
    );
  };

  return (
    <>
      {isFetching}
      {error && <div>Error</div>}
      <ul>{products.map(mapProduct)}</ul>
    </>
  );
}

const mapStateToProps = (state) => state.product;

const mapDispatchProps = (dispatch) => ({
  getUsers: () => dispatch(actionCreators.getProductsAction()),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductsList);
