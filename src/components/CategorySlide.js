import React from 'react'
import { 
  Container, Button,
  Card, CardTitle, CardImg, CardImgOverlay 
} from 'reactstrap'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// importing images
import item1 from '../assets/images/clipart1.png'
import item2 from '../assets/images/clipart2.png'
import item3 from '../assets/images/clipart3.png'
import item4 from '../assets/images/clipart4.png'
import item5 from '../assets/images/clipart5.png'
import item6 from '../assets/images/clipart6.png'
import prev from '../assets/images/prev.png'
import next from '../assets/images/next.png'

import '../assets/css/categoryCarousel.css'

export default class Gallery extends React.Component {
  items = [
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#CC0B04'}}>
      <img src={item1} alt='...' />
      <h2 className='title-cat'>T-Shirt</h2>
    </div>,
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#1C3391'}}>
      <img src={item2} alt='...' />
      <h2 className='title-cat'>Shorts</h2>
    </div>,
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#F67B02'}}>
      <img src={item3} alt='...' />
      <h2 className='title-cat'>Jacket</h2>
    </div>,
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#E31F51'}}>
      <img src={item4} alt='...' />
      <h2 className='title-cat'>Pants</h2>
    </div>,
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#57CD9E'}}>
      <img src={item5} alt='...' />
      <h2 className='title-cat'>Shoes</h2>
    </div>,
    <div className='wrapper-cat d-flex align-items-center justify-content-center' style={{backgroundColor:'#5650D8'}}>
      <img src={item6} alt='...' />
      <h2 className='title-cat'>High heels</h2>
    </div>,
  ]

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 5 } },
    galleryItems: this.galleryItems(),
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span className='dot' onClick={() => this.slideTo(i)}>• </span>

  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <>
        <div>
          <span className="h2 font-weight-bold">Category</span>
        </div>
        <div>
          <span className="text-muted h6 small">What are you currently looking for</span>
        </div>
        <div className='mt-5 slide-cat-wrapper'>
          <>
            <AliceCarousel
              dotsDisabled={true}
              buttonsDisabled={true}
              items={galleryItems}
              responsive={responsive}
              slideToIndex={currentIndex}
              onSlideChanged={this.onSlideChanged}
            />

            <ul>{this.items.map(this.thumbItem)}</ul>
            <Button className='button-cat prev-cat shadow' onClick={() => this.slidePrev()}>
              <img src={prev} alt='prev'/>
            </Button>
            <Button className='button-cat next-cat shadow' onClick={() => this.slideNext()}>
              <img src={next} alt='prev'/>
            </Button>
          </>
        </div>
      </>
    )
  }
}