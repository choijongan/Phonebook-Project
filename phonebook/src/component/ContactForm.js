import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => { 
  const [name,setName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState(0);
  const dispatch = useDispatch();

  const addContact=(event)=> {
    event.preventDefault(); //계속 새로고침되는걸 막아줌.
    dispatch({type:"ADD_CONTACT" , payload:{name, phoneNumber}})
  }
 
  return (
    //onChange=> 타입할 때마다 타입한 값을 읽어와서 저장
    <div>
    <Form onSubmit={addContact}>
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