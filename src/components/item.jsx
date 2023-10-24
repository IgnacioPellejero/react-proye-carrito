import PropTypes from 'prop-types';

const Item = ({name, img, price }) => {
    return (
      <article>
        <header>
          <h2>{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <section>
          <p>
            <strong>Price:</strong> {price} €
          </p>
        </section>
        <footer>
          <button>ver detalle</button>
        </footer>
      </article>
    );
  };
  Item.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  export default Item