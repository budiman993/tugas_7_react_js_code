import React from 'react';
import './css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';
import PageMedia from './component/PageMedia';
import PageBadge from './component/PageBadge';
import PageBreadCrumb from './component/PageBreadCrumb';
import PageCard from './component/PageCard';


function App() {
  return (
    <div>
    <br />
<Container fluid>
  <Row>
  
      <Alert variant="primary" align="center" >
    Website React Bootstrap
  </Alert>
    
    <Col md={{span : 3, offset:4}} align="right" ><PageBadge /></Col>
    <Col ><PageMedia /></Col>
  </Row>
  <Row>
    <Col ></Col>
    <Col md={{span : 8, offset:7}} ><PageBreadCrumb /></Col>
  </Row>
  <Row>
  <Col></Col>
  <Col md="9"><PageCard /></Col>
  <Col></Col>
  </Row>


</Container>
 <br />   
    </div>
  );
}

export default App;
