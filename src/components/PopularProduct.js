import React from 'react'
import { 
  Container, Row, Col
} from 'reactstrap'

// import component
import CardItem from '../components/CardItem'

export default function PopularProduct() {
  return(
    <>
      <Container className='mt-3'>
        <div>
          <span className='h2 font-weight-bold'>Popular</span>
        </div>
        <div>
          <span className='text-muted h6 small'>Find clothes that are trending recently</span>
        </div>
        <Row className='d-flex justify-content-between'>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
          <Col xs='12' lg='3'>
            <CardItem />
          </Col>
        </Row>
      </Container>
    </>
  )
}