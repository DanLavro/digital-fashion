import React from 'react';
import styles from './Filter.module.scss';

import { IFiltersState } from '../../types/types';
interface IFilterProps {
  handleChange: (filterType: string, filterValue: boolean) => void;
  filtersState: IFiltersState;
}

export const Filter: React.FC<IFilterProps> = ({
  handleChange,
  filtersState,
}) => {
  return (
    <div>
      <button
        className={styles.availabilityBtn}
        onClick={() => {
          handleChange('availability', !filtersState.availability);
        }}
      >
        Availability
      </button>
    </div>
  );
};
