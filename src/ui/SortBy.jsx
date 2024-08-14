import { useSearchParams } from 'react-router-dom';
import Select from './Select';

/* eslint-disable react/prop-types */
export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  //set default param in url address
  const sortBy = searchParams.get('sortBy') || '';

  //set param in url
  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      value={sortBy}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}
