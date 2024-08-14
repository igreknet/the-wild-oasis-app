import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import { useSearchParams } from 'react-router-dom';

export default function CabinTable() {
  //connect to custom hook
  //making query to supabase, to get data - queryFn: getCabins
  const { isLoading, cabins } = useCabins();

  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }

  //get params and set 'all' by default, when go to this page
  const filterValue = searchParams.get('discount') || 'all';

  //create logic for filtering cabins
  let filteredCabins;
  if (filterValue === 'all') {
    filteredCabins = cabins;
  }
  if (filterValue === 'no-discount') {
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  }
  if (filterValue === 'with-discount') {
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);
  }

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      {/* render props: */}
      <Table.Body
        // data={cabins}
        data={filteredCabins}
        render={cabin => (
          <CabinRow
            cabin={cabin}
            key={cabin.id}
          />
        )}
      />
    </Table>
  );
}
