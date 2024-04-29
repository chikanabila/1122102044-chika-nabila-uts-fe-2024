import React from 'react'
import {Container, Row, Col, Accordion} from 'react-bootstrap'

const Faq = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row>
          <Col>
          <h2 className="text-center fw bold">Yang Biasa di Tanyakan</h2>
          <p className="text-center">Selamat datang di bagian FAQ kami! Di sini, kami menyediakan jawaban atas pertanyaan yang sering diajukan oleh pengguna kami. Silakan jelajahi pertanyaan umum di bawah ini untuk mendapatkan informasi lebih lanjut tentang produk atau layanan kami.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bagaimana cara pemesanan?</Accordion.Header>
                <Accordion.Body>
                  Silahkan langsung hubungi kami untuk melakukan pemesanan. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Harus menghubungi kemana?</Accordion.Header>
                <Accordion.Body>
                  Kontak kami tertera pada footer laman web ini
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Berapa lama waktu pengerjaan?</Accordion.Header>
                <Accordion.Body>
                  Lama waktu pengerjaan bergantung dari tingkat ke-kompleks-an dokumen anda.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Menerima jenis dokumen apa saja?</Accordion.Header>
                <Accordion.Body>
                  Kami menerima berbagai jenis dokumen, mulai dari dokumen keuangan, pendidikan, kenotarisan, dll.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Apakah privasi terjaga?</Accordion.Header>
                <Accordion.Body>
                  Privasi anda kami jamin terjaga. Kami memahami betapa pentingnya keamanan dokumen Anda.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Apakah terpercaya?</Accordion.Header>
                <Accordion.Body>
                Tim terjemahan kami terdiri dari para profesional yang berpengalaman dalam berbagai bidang.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq