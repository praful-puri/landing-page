import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
import food from '../../assets/food.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={food} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Fruit is good for you, but what is the healthiest fruit? All fruit offer health benefits.</h1>
              <p className='text-secondary my-4'>Healthcare professionals know that fruit is a highly nutritious, delicious, and convenient addition to any diet. With more than 2,000 varieties of fruit available, you may wonder which ones you should pick.</p>
              <p className='text-secondary'>Each type of fruit brings its own unique set of nutrients and benefits to the table. The key is to eat fruits of various colors, as each color provides adifferent set of healthy nutrients (1Trusted Source).</p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>order food</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot