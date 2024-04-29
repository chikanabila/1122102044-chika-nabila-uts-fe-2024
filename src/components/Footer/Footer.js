import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer pb-7 pt-4">
        <Row>
          <Col>
            <h3 className="fw-bold fs-4 text-white">.Abing's</h3>
          </Col>
          <Col className="text-end">
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram text-white mx-lg-3 fs-2 mx-2"></i></a>
            <a href="https://www.whatsapp.com"><i class="fa-brands fa-whatsapp text-white  mx-lg-3 fs-2  mx-2"></i></a>
            <a href="https://www.gmail.com"><i class="fa-regular fa-envelope text-white  mx-lg-3 fs-2  mx-2"></i></a>
            <a href="https://www.facebook.com"><i class="fa-brands fa-facebook text-white  mx-lg-3 fs-2  mx-2"></i></a>

          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">&copy; Copyright by Abill untuk UAS Front-end, All Right Reserved.</p>
          </Col>
        </Row>

    </div>
  )
}

export default Footer