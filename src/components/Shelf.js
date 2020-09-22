import React from 'react';
import PropTypes from 'prop-types';
import Commodity from './Commodity';

const Shelf = (props) => {
  const { commodifys, name, onAdd } = props;
  return (
    <div className="shelf">
      <h3>{name}</h3>
      <div className="shelf-content">
        {commodifys &&
          commodifys.map((commodity, index) => (
            <Commodity
              name={commodity.name}
              price={commodity.price}
              key={index}
              onAdd={() => onAdd(commodity)}
            />
          ))}
      </div>
    </div>
  );
};
Shelf.propTypes = {
  commodifys: PropTypes.array,
  name: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Shelf;
