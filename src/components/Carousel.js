import React from 'react'
import { 
  Container,
  Card, CardTitle, CardImg, CardImgOverlay 
} from 'reactstrap'
import Carousel from 'react-elastic-carousel';

// importing images
import item1 from '../assets/images/header2.jpg'
import item2 from '../assets/images/header3.jpg'

export default function CarouselComp() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
  ]

  return(
    <Container>
      <Carousel breakPoints={breakPoints} className='mt-5'>
        <Card inverse>
          <CardImg width="100%" src={item1} alt="Header 1" />
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-title text-center font-weight-bold'><span>Trends in 2020</span></CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg width="100%" src={item2} alt="Header 1" />
          <CardImgOverlay>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div>
                <CardTitle className='card-title font-weight-bold d-block'>Black Edition</CardTitle>
              </div>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg width="100%" src={item1} alt="Header 1" />
          <CardImgOverlay>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div>
                <CardTitle className='card-title font-weight-bold d-block'>Trends in 2020</CardTitle>
              </div>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg width="100%" src={item2} alt="Header 1" />
          <CardImgOverlay>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div>
                <CardTitle className='card-title font-weight-bold d-block'>Black Edition</CardTitle>
              </div>
            </div>
          </CardImgOverlay>
        </Card>
      </Carousel>
    </Container>
  )
}
