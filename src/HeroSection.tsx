import { Col, Container, Row,Image, Button } from "react-bootstrap"
import photo from './assets/image/profile.jpg';
import "./index.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";
import { MdWavingHand} from "react-icons/md";

import Toggle from "./Toggle";
const HomeSection = () => {
  const navigate = useNavigate();
  const contactInfo = () => {
     navigate("/contact")
  }
  const skillsInfo= () => {
     navigate("/skill")
  }
  
 
  return (
    <div className="glass-photo">
          <Stars />
          <Toggle></Toggle>
           
        <Container className="d-flex justify-content-center align-items-center vh-100">
         
          
         
          <Row className="d-flex align-items-center text-center py-5 text-md-start">
            <Col xs={12} md={6}>
            
             <h3 style={{ color: "#eff5fcff", fontWeight: "600" }}>Hi ! <MdWavingHand color="#d18d34ff" className="mx-2 hiHand"></MdWavingHand>This is Kuralarasi M</h3>
               <h4 style={{ color: "#eff5fcff", fontWeight: "600" }}>
      <Typewriter
        options={{
          delay: 70,
          deleteSpeed: 40,
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Aspiring Software Engineer.")
            
            .pauseFor(1000)
            .deleteAll()
            .typeString("Always excited to learn something new!.")
            .pauseFor(1000)
            .start();
        }}
      />
    </h4>
             <p className="fw-medium">Passionate Developer skilled in C#, ASP.NET, EF Core, SQL Server, ReactJS, HTML, CSS, Bootstrap, JavaScript, and
 jQuery, with a focus on developing scalable, responsive, and interactive full-stack web applications.</p>
 <Button onClick={contactInfo} style={{backgroundColor:"#ce4ee7ff" , border:"2px solid transparent"}} className="my-3 contact-btn-gradient">Reach Me</Button>
 <div>
     <Button onClick={skillsInfo} style={{backgroundColor:"#ce4ee7ff" , border:"2px solid transparent"}} className="mt-3 contact-btn-gradient">My Developer Stack</Button>
 </div>
 
            </Col>
            <Col xs={12} md={6} className="px-3">
            <div >
             
                     <Image src={photo} style={{maxWidth:"300px", width:"100%"}} fluid className="photo photo-transform cardColor" ></Image>
               
            </div>
           
            </Col>
          </Row>
        </Container>           
        
        <div>
          
        </div>
       
    </div>
    
  )
}

export default HomeSection