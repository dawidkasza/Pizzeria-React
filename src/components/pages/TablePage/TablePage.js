import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableForm from '../../features/TableForm/TableForm';
import {
  fetchTablesFromAPI,
  getTableById,
  getTablesLoading,
  updateTableInAPI,
} from '../../../redux/tablesRedux';
import { useEffect } from 'react';

const TablePage = () => {
   const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const table = useSelector(state => getTableById(state, id));
  const loading = useSelector(getTablesLoading);

  // fetch tables if empty
  useEffect(() => {
    if (!table) {
      dispatch(fetchTablesFromAPI());
    }
  }, [dispatch, table]);

  // only redirect if not loading and table still not found
  useEffect(() => {
    if (!loading && !table) {
      navigate('/');
    }
  }, [loading, table, navigate]);

  if (loading || !table) {
    return <h2>Loading...</h2>;
  }

  const handleSubmit = updatedTable => {
    dispatch(updateTableInAPI(updatedTable)).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <h1>Table {table.id}</h1>
      <TableForm table={table} loading={loading} onSubmit={handleSubmit} />
    </>
  );
};

export default TablePage;
