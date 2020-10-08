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

export default class Gallery extends React.Component {
  items = [
    <div><img src={item1} alt='...' /></div>,
    <div><img src={item2} alt='...' /></div>,
    <div><img src={item3} alt='...' /></div>,
    <div><img src={item4} alt='...' /></div>,
    <div><img src={item5} alt='...' /></div>,
    <div><img src={item6} alt='...' /></div>
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

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div className='mt-5'>
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
          <Button onClick={() => this.slidePrev()}>Prev Button</Button>
          <Button onClick={() => this.slideNext()}>Next Button</Button>
        </>
      </div>
    )
  }
}