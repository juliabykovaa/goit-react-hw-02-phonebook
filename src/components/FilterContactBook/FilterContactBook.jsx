import { React } from 'react';

import {Input} from './FilterContactBook.styled'

export const Filter = ({ value, onChange }) => (
  <label>
    <Input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  </label>
);
