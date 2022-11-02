import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => { 
  const [name,setName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState(0);
 
  return (
    //onchange=> 타입할 때마다 타입한 값을 읽어와서 저장
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" 
        onChange={(event) => setName(event.target.value)}
        />  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" 
        onChange={(event) => setName(event.target.value)}
      />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  



    </div>
  )
}

export default ContactForm