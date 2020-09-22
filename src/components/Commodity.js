import React from 'react';
import PropTypes from 'prop-types';
import icon from '../assets/product_image_placeholder.png';

const Commodity = (props) => {
  const { name, price, onAdd } = props;
  return (
    <div className="commodity">
      <h4>{name}</h4>
      <img src={icon} />
      <div className="commodity-bottom">
        <p>{price}</p>
        <button className="add" onClick={onAdd}>
          add to cart
        </button>
      </div>
    </div>
  );
};

Commodity.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  onAdd: PropTypes.func,
};
export default Commodity;
