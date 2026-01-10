import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableById, fetchTablesFromAPI, getTablesLoading } from '../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';

const TablePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const table = useSelector(state => getTableById(state, id));
  const loading = useSelector(getTablesLoading);

  useEffect(() => {
    if (!table) {
      dispatch(fetchTablesFromAPI());
    }
  }, [dispatch, table]);

  useEffect(() => {
    if (!loading && !table) {
      navigate('/');
    }
  }, [loading, table, navigate]);

  if (loading || !table) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Table {table.id}</h1>
      <TableForm/>
    </>
  );
};

export default TablePage;
