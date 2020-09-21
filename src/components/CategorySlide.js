import React from 'react'
import { 
  Container,
  Card, CardTitle, CardImg, CardImgOverlay 
} from 'reactstrap'
import Carousel from 'react-elastic-carousel';

// importing images
import item1 from '../assets/images/clipart1.png'
import item2 from '../assets/images/clipart2.png'
import item3 from '../assets/images/clipart3.png'
import item4 from '../assets/images/clipart4.png'
import item5 from '../assets/images/clipart5.png'
import item6 from '../assets/images/clipart6.png'

export default function CategorySlide() {
  const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 }
  ]

  return(
    <Container className='mt-3'>
      <div>
        <span className='h2 font-weight-bold'>Category</span>
      </div>
      <div>
        <span className='text-muted h6 small'>What are you currently looking for</span>
      </div>
      <Carousel breakPoints={breakPoints2} className='mt-3'>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#CC0B04'}}>
            <CardImg className='card-image1 img-fluid' src={item1} alt="Category T-Shirt" />
          </div>
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>T-Shirt</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#1C3391'}}>
            <CardImg className='card-image2' src={item2} alt="Category Shorts" />
          </div>
          <CardImgOverlay>
            <div className='w-100 h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>Shorts</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#F67B02'}}>
            <CardImg className='card-image3' src={item3} alt="Category Jacket" />
          </div>
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>Jacket</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#E31F51'}}>
            <CardImg className='card-image4' src={item4} alt="Category Pants" />
          </div>
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>Pants</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#57CD9E'}}>
            <CardImg className='card-image5' src={item5} alt="Category Shoes" />
          </div>
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>Shoes</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <div className='category d-flex justify-content-center align-items-center rounded-lg' style={{backgroundColor:'#57CD9E'}}>
            <CardImg className='card-image6' src={item6} alt="Category High Heels" />
          </div>
          <CardImgOverlay>
            <div className='h-100 d-flex align-items-center'>
              <CardTitle className='w-100 card-cat text-center font-weight-bold'>High Heels</CardTitle>
            </div>
          </CardImgOverlay>
        </Card>
      </Carousel>
    </Container>
  )
}
