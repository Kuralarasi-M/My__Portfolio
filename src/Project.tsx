import P1 from './assets/image/P1.png'
import P2 from './assets/image/P2.png'
import { Card, CardImg, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { GrTechnology } from "react-icons/gr";
import { FaCircleDot } from "react-icons/fa6";
import "./index.css"
import Stars from './Stars';

const Project = () => {
  return (
    <div className="glass-photo">
        <Stars />
      <Container >
<div className="d-flex justify-content-center align-items-center w-100 mx-auto p-2 ">
              <h3 className="page-title">My Projects</h3>
        </div>
        
        <Row className="d-flex justify-content-center align-items-center gap-3 vh-90 mt-2">
          <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive card-custom bg-transparent cardColor">
  <CardImg src={P1} className="card-img-responsive" />

  <CardTitle className='m-auto py-2'>E-Commerce Website</CardTitle>
  <CardText><GrTechnology  className="mx-2" /><b>Tech: ReactJS, JSON Server</b></CardText>

 <CardText>
  <FaCircleDot color="rgb(132, 12, 243)" className="mx-2" />
  Created a small online shopping website where users can view products and add them to a cart. 
  
</CardText>

<CardText>
  <FaCircleDot color="rgb(132, 12, 243)" className="mx-2" />
  Use JSON Server to store and show product details. 
 
</CardText>

</Card>

          </Col>
         <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive card-custom bg-transparent cardColor">
  <CardImg src={P2} className="card-img-responsive" />

  <CardTitle className='m-auto py-2'>To-Do Application</CardTitle>
  <CardText><GrTechnology color="rgb(132, 12, 243)" className="mx-1" /><b>Tech: ReactJS, ASP.NET, SQL Server</b></CardText>

<CardText>
  <FaCircleDot color="rgb(132, 12, 243)" className="mx-2" />
  Built a To-Do application where users can add, edit, and delete their daily tasks and marks complete or not.
 
</CardText>

<CardText>
  <FaCircleDot color="rgb(132, 12, 243)" className="mx-2" />
  Used a Sql Server to save and manage all tasks securely.
  
</CardText>


</Card>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project