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

const Forms = props => {
  return (
    <Container>
      <Card className='mt-5 bg-success'>
        <CardBody>
          <Form className='p-5'>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='firstName' /> First Name
                  <Input
                    id='firstName'
                    type='text'
                    name='fname'
                    value=''
                    onChange=''
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='lastName' />
                  Last Name
                  <Input
                    id='lastName'
                    type='text'
                    name='lname'
                    value=''
                    onChange=''
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='email' />
                  Email
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    value=''
                    onChange=''
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
                    value=''
                    onChange=''
                  >
                    <option value='1'>Team Lead</option>
                    <option value='2'>Designer</option>
                    <option value='3'>Front End</option>
                    <option value='4'>Back End</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button className='bg-primary mt-5'>Add Team Member</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Forms;
