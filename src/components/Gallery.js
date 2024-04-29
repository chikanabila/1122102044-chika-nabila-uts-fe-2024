import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import gall1 from "../assets/image/gallery/gall1.webp"
import gall2 from "../assets/image/gallery/gall2.webp"
import gall3 from "../assets/image/gallery/gall3.webp"
import gall4 from "../assets/image/gallery/gall4.webp"
import gall5 from "../assets/image/gallery/gall5.jpg"
import gall6 from "../assets/image/gallery/gall6.webp"

const Gallery = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-item-center" id="gallery">
      <Container>
        <Row className= "row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-5 pt-100">
          <Col>
            <img src={gall1} alt="unsplash.com" className="w-100"/>
          </Col>
          <Col>
            <img src={gall2} alt="unsplash.com" className="w-100"/>
          </Col>
          <Col>
            <img src={gall3} alt="unsplash.com" className="w-100"/>
          </Col>
          <Col>
            <img src={gall4} alt="unsplash.com" className="w-100"/>
          </Col>
          <Col>
            <img src={gall5} alt="unsplash.com" className="w-100"/>
          </Col>
          <Col>
            <img src={gall6} alt="unsplash.com" className="w-100"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery