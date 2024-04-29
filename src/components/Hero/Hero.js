import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
        <Container>
            <Row>
              <Col className='text-center'>
              <h1>Bing's translator</h1>
              <p>Selamat datang di layanan terjemahan dokumen kami, di mana keahlian bertemu dengan keandalan untuk memenuhi semua kebutuhan terjemahan Anda.</p>
              </Col>
              
            </Row>
          </Container>  
    </div>

  )
}

export default HeroComp