import { Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TableForm = ({ table, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    id: table.id,
    status: table.status,
    peopleAmount: Number(table.peopleAmount),
    maxPeopleAmount: Number(table.maxPeopleAmount),
    bill: table.bill ?? 0,
  });

  const handleStatusChange = e => {
    const status = e.target.value;

    setFormData(prev => {
      let updated = { ...prev, status };

      if (status === 'Free' || status === 'Cleaning') {
        updated.peopleAmount = 0;
        updated.bill = 0;
      }

      if (status !== 'Busy') {
        updated.bill = 0;
      }

      return updated;
    });
  };

  const handlePeopleChange = e => {
    const value = Math.min(10, Math.max(0, Number(e.target.value)));

    setFormData(prev => ({
      ...prev,
      peopleAmount: Math.min(value, prev.maxPeopleAmount),
    }));
  };

  const handleMaxPeopleChange = e => {
    const value = Math.min(10, Math.max(0, Number(e.target.value)));

    setFormData(prev => ({
      ...prev,
      maxPeopleAmount: value,
      peopleAmount: Math.min(prev.peopleAmount, value),
    }));
  };

  const handleBillChange = e => {
    const value = Math.max(0, Number(e.target.value));

    setFormData(prev => ({
      ...prev,
      bill: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col sm="2">
            <strong>Status:</strong>
          </Col>
          <Col sm="4">
            <Form.Select value={formData.status} onChange={handleStatusChange}>
              <option>Free</option>
              <option>Reserved</option>
              <option>Busy</option>
              <option>Cleaning</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Row className="align-items-center">
          <Col sm="2">
            <strong>People:</strong>
          </Col>
          <Col xs="auto">
            <Form.Control
              type="number"
              value={formData.peopleAmount}
              onChange={handlePeopleChange}
              min={0}
              max={10}
              style={{ width: '60px' }}
            />
          </Col>
          <Col xs="auto">/</Col>
          <Col xs="auto">
            <Form.Control
              type="number"
              value={formData.maxPeopleAmount}
              onChange={handleMaxPeopleChange}
              min={0}
              max={10}
              style={{ width: '60px' }}
            />
          </Col>
        </Row>
      </Form.Group>

      {formData.status === 'Busy' && (
        <Form.Group className="mb-4">
          <Row className="align-items-center">
            <Col sm="2">
              <strong>Bill:</strong>
            </Col>
            <Col xs="auto">
              <InputGroup style={{ width: '120px' }}>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={formData.bill}
                  onChange={handleBillChange}
                  min={0}
                />
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
      )}

      <Button type="submit" disabled={loading}>
        Update
      </Button>
    </Form>
  );
};

TableForm.propTypes = {
  table: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default TableForm;
