import React from 'react'
import { 
  Container
} from 'reactstrap'

// importing components
import Navbar from '../components/Navbar1'
import CarouselComp from '../components/Carousel'
import CategorySlide from '../components/CategorySlide'
import NewProduct from '../components/NewProduct'
import PopularProduct from '../components/PopularProduct'

class HomePage extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Container className='mb-5'>
          <CarouselComp />
          <CategorySlide />
          <NewProduct />
          <PopularProduct />
        </Container>
      </React.Fragment>
    )
  }
}

export default HomePage
