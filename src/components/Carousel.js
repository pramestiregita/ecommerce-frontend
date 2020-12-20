import React from 'react'
import { 
  Container, Button,
  Card, CardTitle, CardImg, CardImgOverlay 
} from 'reactstrap'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// importing images
import item1 from '../assets/images/header2.jpg'
import item2 from '../assets/images/header3.jpg'
import prev from '../assets/images/prev.png'
import next from '../assets/images/next.png'

import '../assets/css/carousel.css'

export default class Gallery extends React.Component {
  items = [
    <div className='wrapper'>
      <img src={item1} alt='...' />
      <h1 className='title'>Trends 2020</h1>
    </div>,
    <div className='wrapper'>
      <img src={item2} alt='...' />
      <h1 className='title'>Black Edition</h1>
    </div>,
    <div className='wrapper'>
      <img src={item1} alt='...' />
      <h1 className='title'>Trends 2020</h1>
    </div>,
    <div className='wrapper'>
      <img src={item2} alt='...' />
      <h1 className='title'>Black Edition</h1>
    </div>,
  ]

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 2 } },
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
      <div className='mt-5 slide-wrapper'>
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
          <Button className='button prev shadow' onClick={() => this.slidePrev()}>
            <img src={prev} alt='prev'/>
          </Button>
          <Button className='button next shadow' onClick={() => this.slideNext()}>
            <img src={next} alt='prev'/>
          </Button>
        </>
      </div>
    )
  }
}
