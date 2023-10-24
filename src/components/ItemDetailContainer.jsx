import { useState, useEffect } from "react";
import { getProductById } from "./asyncMock";
import { ItemDetail } from "./itemDetail";
import PropTypes from 'prop-types';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById('1')
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
};

ItemDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemDetailContainer;