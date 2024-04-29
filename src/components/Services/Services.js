import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center" id="services">
      <Container>
        <Row className="mb-5">
          <Col>
          <h1 className="text-center fw-bold">Keunggulan layanan kami</h1>
          <p className="text-center">Kami adalah mitra terpercaya yang siap membantu Anda mengatasi hambatan bahasa dan memastikan pesan Anda disampaikan dengan tepat dan akurat.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1">
          <Col className="text-center">
            <i class="fa-solid fa-coins fs-2 mb-4"></i>
            <h5>Harga yang bersaing</h5>
            <p>Kami menawarkan layanan terjemahan dengan harga yang kompetitif. Kami percaya bahwa kualitas tinggi tidak harus datang dengan biaya yang tinggi.</p>
          </Col>
          <Col className="text-center">
            <i class="fa-regular fa-clock fs-2 mb-4"></i>
            <h5>Fleksibilitas waktu</h5>
            <p>Kami memahami bahwa waktu adalah aspek krusial dalam dunia bisnis dan proyek-proyek pribadi. Oleh karena itu, kami berkomitmen untuk memberikan terjemahan tepat waktu tanpa mengorbankan kualitas.</p>
          </Col> 
          <Col className="text-center">
            <i class="fa-regular fa-thumbs-up fs-2 mb-4"></i>
            <h5>Ketepatan dan konsistensi</h5>
            <p>Kami mengutamakan ketepatan dan konsistensi dalam setiap terjemahan. Setiap kata dan frasa diperlakukan dengan cermat untuk memastikan pesan asli tetap terjaga tanpa kehilangan makna.</p>
          </Col> 
        </Row>
      </Container>
    </div>
  )
}

export default Services