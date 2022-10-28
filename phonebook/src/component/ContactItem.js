import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
    <Col lg={2}>
        <img
        width={50} 
        src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg' />
    </Col>
    <Col lg={10}>
    <div>
        최종안
    </div>
    <div>
        01012345678
    </div>
    </Col>
</Row>
  )
}

export default ContactItem