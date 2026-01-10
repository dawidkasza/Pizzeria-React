import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableRow = ({ id, status }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <div>
        <strong>Table {id}</strong>
        <span className="ms-3">
          <strong>Status:</strong> {status}
        </span>
      </div>

      <Button
        as={Link}
        to={`/table/${id}`}
        variant="primary"
      >
        Show more
      </Button>
    </div>
  );
};

export default TableRow;
