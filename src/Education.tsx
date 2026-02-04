import { Card, CardImg, CardText, Col, Container, Row } from "react-bootstrap"
import "./index.css"
import school1 from './assets/image/school-1.jpg';
import college from './assets/image/college.jpg';
import { FaUserGraduate } from "react-icons/fa";
import { IoBook} from "react-icons/io5";

import { FaBookOpenReader,FaBuildingColumns,FaRankingStar,FaSchoolFlag } from "react-icons/fa6";
import Stars from "./Stars";

const Education = () => {
  return (
    
    <div className="glass-photo">
        <Stars /> 
      <Container >
        <div className="d-flex justify-content-center align-items-center w-100 mx-auto p-2 ">
              <h3 className="page-title">Education</h3>
        </div>
      
        <Row className="d-flex justify-content-center align-items-center gap-3 vh-90 mt-3">
          <Col xs={10} md={3}>
           <Card className="p-3  card-img-responsive card-custom bg-transparent cardColor">
            <CardImg src={college} className="card-img-responsive "></CardImg>
            <Card.Text ><FaUserGraduate className="mx-2"color="rgba(100, 3, 190, 1)"/><b>Bachelor of Engineering (2021 – 2025) </b> </Card.Text>
               
              <CardText><FaBookOpenReader className="mx-2" color="rgba(100, 3, 190, 1)"/>(BE/ECE) - Electronics & Communication Engineering</CardText> 
              <CardText><FaRankingStar className="mx-2" color="rgba(100, 3, 190, 1)"/>CGPA : <b>8.1</b> </CardText>
              <CardText><FaBuildingColumns className="mx-2" color="rgba(100, 3, 190, 1)"/>Adhi College of Engineering and Technology</CardText>
           
           </Card>
          </Col>
          <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive card-custom bg-transparent cardColor">
            <CardImg src={school1} className="card-img-responsive"></CardImg>
            <CardText><IoBook className="mx-2" color="rgba(100, 3, 190, 1)"/><b>HSC (2020 – 2021)</b></CardText>
             <CardText><FaRankingStar className="mx-2" color="rgba(100, 3, 190, 1)"/>Percentage - <b>88%</b></CardText>
              <CardText><IoBook className="mx-2" color="rgba(100, 3, 190, 1)"/><b>SSLC (2018-2019)</b></CardText>
            
            <Card.Text><FaRankingStar className="mx-2" color="rgba(100, 3, 190, 1)"/>Percentage - <b>87%</b></Card.Text>
             
              <CardText><FaSchoolFlag className="mx-2" color="rgba(100, 3, 190, 1)"/>Government Higher Secondary School</CardText>
              
           </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Education