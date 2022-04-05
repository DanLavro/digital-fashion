import React from 'react';
import { Card } from '../Card/Card';
import { IProduct } from '../../types/types';
import styles from './CardList.module.scss';
interface CardListProps {
  products: IProduct[];
}

export const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <div>
      <div className={styles.Grid}>
        {products.map((product) => (
          <Card key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
