import { Button, Container, Form } from "react-bootstrap";

const TableForm = () => {
  return(
     <Form>
      <Form.Group className="mb-3">
        <Form.Label><strong>Status:</strong></Form.Label>
        <Form.Select>
          <option>Free</option>
          <option>Reserved</option>
          <option>Busy</option>
          <option>Cleaning</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><strong>People:</strong></Form.Label>
        <div className="d-flex gap-2">
          <Form.Control
            type="number"
          />
          <span>/</span>
          <Form.Control
            type="number"
          />
        </div>
      </Form.Group>

      <Button type="submit">Update</Button>
    </Form>
  );
};

export default TableForm;
