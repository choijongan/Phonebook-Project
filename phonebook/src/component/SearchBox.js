import React, { useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByname = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
  }
  return (
    <Form onSubmit={searchByname} className='search-form'>
     <Row>
        <Col lg={10}>
            <Form.Control type="text" 
            placeholder="이름을 입력해주세요" 
            onChange={(event) => setKeyword(event.target.value)}
            />
        </Col>
        <Col lg={2}>
            <Button type='submit'>찾기</Button> 
        </Col>
     </Row> 
    </Form>   //button type submit으로 안주면 검색을 못함.
  )
}

export default SearchBox