import React from 'react';
import { IProduct } from '../../types/types';
import styles from './Card.module.scss';
interface ICardProps {
  product: IProduct;
}

export const Card: React.FC<ICardProps> = ({ product }: ICardProps) => {
  return (
    <div className={styles.Card}>
      <div className={styles.imgWrapper}>
        <img
          loading="lazy"
          className={styles.productImg}
          src="../../img/item.png"
          alt={product.name}
        />
        <div className={styles.creationInfo}>
          <div className={styles.creatorInfo}>
            <span>created by</span>
            <span className={styles.creatorName}>
              {product.created_by.display_name}
            </span>
          </div>
          <span className={styles.productName}>{product.name}</span>
        </div>
      </div>

      <div className={styles.productInfo}>
        <div>
          <span>available</span>
          <span className={styles.count}>
            {product.quantity_available} of 50
          </span>
        </div>
        <div>
          <span>price</span>
          <span className={styles.price}>
            {Number(product.latest_price) / 1000000000000000000} ETH
          </span>
        </div>
      </div>
    </div>
  );
};
