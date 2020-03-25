import React from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const MyForm = props => {
  return (
    <Container>
      <Card className='mt-5 bg-success'>
        <CardBody>
          <h3 className='text-center'>
            Fill Out The Form To Add A Member To The Team
          </h3>
          <hr />
          <Form onSubmit={props.onFormSubmit} className='p-2'>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='firstName' />
                  First Name
                  <Input
                    required
                    id='firstName'
                    type='text'
                    name='fname'
                    value={props.formValues.fname}
                    onChange={props.onInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='lastName' />
                  Last Name
                  <Input
                    required
                    id='lastName'
                    type='text'
                    name='lname'
                    value={props.formValues.lname}
                    onChange={props.onInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form className='pt-5'>
              <Col md={6}>
                <FormGroup>
                  <Label for='email' />
                  Email
                  <Input
                    required
                    id='email'
                    type='email'
                    name='email'
                    value={props.formValues.email}
                    onChange={props.onInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='role' />
                  Role
                  <Input
                    id='role'
                    type='select'
                    name='role'
                    value={props.formValues.role}
                    onChange={props.onInputChange}
                  >
                    <option value='Team Lead'>Team Lead</option>
                    <option value='Designer'>Web Designer</option>
                    <option value='Front End'>Front End Dev</option>
                    <option value='Back End'>Back End Dev</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button type='submit' className='bg-primary mt-5'>
              Add Team Member
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default MyForm;
