import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

const TeamCard = props => {
  return (
    <Col xs='12' sm='12' md='6' xl='4' className='p-4'>
      <Card className='bg-success'>
        <CardBody>
          <CardHeader className='bg-primary'>Team Member</CardHeader>
          <CardText className='text-light pt-2'>
            Name: {props.teamMember.fname} {props.teamMember.lname}
          </CardText>
          <CardText className='text-light'>{props.teamMember.email}</CardText>
          <CardText className='text-light'>
            Role: {props.teamMember.role}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeamCard;
