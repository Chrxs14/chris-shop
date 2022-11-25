import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image className={styles['img-item']} loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={100} height={100} layout="responsive" />

      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <div className={styles['div-figure']} onClick={() => handleClick(product)} role="button" tabIndex="0" onKeyPress={() => {}}>
          <figure className={`${styles['more-clickable-area']}`}>
            {state.cart.includes(product) ? (
              <Image className={`${styles['disabled add-to-cart-btn']}`} src={addedToCartImage} alt="added to cart" />
            ) : (
              <Image className={styles['add-to-cart-btn pointer']} src={addToCartImage} alt="add to cart" />
            )}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
