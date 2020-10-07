import React from 'react'
import { 
  Container
} from 'reactstrap'
import { connect } from 'react-redux'

// importing components
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import CarouselComp from '../components/Carousel'
import CategorySlide from '../components/CategorySlide'
import NewProduct from '../components/NewProduct'
import PopularProduct from '../components/PopularProduct'

class HomePage extends React.Component{
  componentDidMount() {
    console.log(this.props.auth)
  }
  
  render(){
    const { isLogin } = this.props.auth
    return(
      <React.Fragment>
        {isLogin?<Navbar2 />:<Navbar1 />}
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

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(HomePage)
