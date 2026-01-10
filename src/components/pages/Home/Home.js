import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTablesFromAPI, getAllTables, getTablesLoading } from '../../../redux/tablesRedux';
import { Container } from 'react-bootstrap';
import TableRow from '../../features/TableRow/TableRow';

const Home = () => {
  const dispatch = useDispatch();

  const tables = useSelector(getAllTables);
  const loading = useSelector(getTablesLoading);

  useEffect(() => {
    dispatch(fetchTablesFromAPI());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <h1 className="mb-4">All tables</h1>

      {tables.map(table => (
        <TableRow
          key={table.id}
          id={table.id}
          status={table.status}
        />
      ))}
    </Container>
  );
};

export default Home;
