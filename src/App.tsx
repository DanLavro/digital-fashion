import { useEffect, useMemo, useState } from 'react';
import { IResponse, IFiltersState } from './types/types';
import axios from 'axios';

import styles from './App.module.scss';

import { CardList } from './components/CardsList/CardList';
import { Filter } from './components/Filter/Filter';

function App() {
  const [data, setData] = useState<IResponse>({
    status: 'success',
    data: {
      creators: {},
      products: [],
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filtersState, setFiltersState] = useState<IFiltersState>({
    availability: false,
  });

  const handleChange = (key: string, value: boolean) => {
    setFiltersState((state) => ({ ...state, [key]: value }));
  };

  const products = useMemo(
    () =>
      filtersState.availability
        ? data.data.products.filter((product) => {
            return product.quantity_available > 0;
          })
        : data.data.products,
    [filtersState.availability, data.data.products]
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get<IResponse>(
        'https://artisant.io/api/products'
      );
      setData(response.data);
      console.log('data', response.data);
    } catch (err) {
      alert(err);
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.App}>
      <header>
        <div>
          <h1>Explore</h1>
          <h2>Buy and sell digital fashion NFT art</h2>
        </div>
        <Filter handleChange={handleChange} filtersState={filtersState} />
      </header>
      <main>
        {isLoading ? <h2>Loading</h2> : <CardList products={products} />}
      </main>
    </div>
  );
}

export default App;
