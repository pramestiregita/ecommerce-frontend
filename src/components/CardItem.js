import React from 'react'
import { 
  Card, CardImg, CardText, CardBody
} from 'reactstrap'

// import images
import item from '../assets/images/item.jpg'

export default function CardItem() {
  return(
    <>
      <Card className='rounded-lg mt-3'>
        <CardImg top width="100%" src={item} alt="Item image" />
        <CardBody>
          <CardText className='m-0'><span className='font-weight-bold h6'>Men's formal suit - Black & White</span></CardText>
          <CardText className='m-0'><span className='font-weight-bold h5 text-danger'>$ 40.0</span></CardText>
          <CardText className='m-0'><span className='text-muted h6'>Zalora Cloth</span></CardText>
        </CardBody>
      </Card>
    </>
  )
}