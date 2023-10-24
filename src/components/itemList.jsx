import Item from './item';
import PropTypes from 'prop-types';

const ItemList = ({ productos }) => {
    return (
      <div className="listGroup">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    );
  };
  
  ItemList.propTypes = {
    productos: PropTypes.array.isRequired,
  };
  
  export default ItemList;