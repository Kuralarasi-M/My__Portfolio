import { Container, Row, Col, Card } from "react-bootstrap";

import { IoCall } from "react-icons/io5";
import { IoMdMail} from "react-icons/io";
import Resume from "./assets/document/Kuralarasi.pdf";
import Stars from "./Stars";
import { BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="glass-photo" >
        <Stars />
        <div className="d-flex justify-content-center align-items-center w-100 mx-auto p-2 ">
              <h3 className="page-title">Contact</h3>
        </div>
        <Container className="d-flex justify-content-center align-items-center gap-3 vh-90 mt-3">
      <Row className="justify-content-center ">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 text-center shadow-lg bg-transparent" style={{ borderRadius: "16px" }} >
            
            <h2 className="mb-3">Get in Touch</h2>

            <p className="text-muted mb-4  fw-bold">
              I'm a fresher passionate about software development.  
              Feel free to reach out for opportunities, collaborations, or just to connect!
            </p>

           
            <p><strong>Kuralarasi M</strong></p>

            {/* Phone */}
            <p>
              <IoCall className="me-2" />
              +91 6382867955
            </p>

            {/* Email */}
            <p>
              <IoMdMail className="me-2" />
              kuralarasi21@gmail.com
            </p>

            {/* LinkedIn */}
            <p>
              <BsLinkedin className="me-2" />
              <a
                href="https://www.linkedin.com/in/kuralarasi-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kuralarasi-m
              </a>
            </p>

            {/* Resume Download Button */}
           
              
             
              <a  href={Resume} download className="mt-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none p-2 bg-primary rounded text-light" >Download</a>
           
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
};

export default Contact;
