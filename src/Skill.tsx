import { Card,  Col, Container, Row } from "react-bootstrap"
import "./index.css";
import {FaHtml5,FaCss3Alt,FaJs,FaBootstrap,FaReact,FaJava,FaDatabase} from "react-icons/fa";
import {SiJquery,SiDotnet} from "react-icons/si";
import Stars from "./Stars";
const Skill = () => {
  return (
    <div className="glass-photo">
        <Stars />
        <div className="d-flex justify-content-center align-items-center w-100 mx-auto p-2 ">
              <h3 className="page-title">Skills</h3>
        </div>
      <Container className="overflow-hidden">
        <Row className="d-flex justify-content-center align-items-center gap-3 vh-80 mt-3">
         
          <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive cardColor d-flex flex-column bg-transparent">
            <h3 className="text-center my-2">Front-End Technologies</h3>
            <div className="d-flex flex-row justify-content-around align-items-center">
               <div>
                 <FaHtml5 size={60}  color="#E34F26" className="blur-skills"/>
                 <p>HTML5</p>
                </div>
             <div>
                 <FaCss3Alt  size={60}  color="#33A9DC" className="blur-skills"/>
                 <p>CSS3</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                 <FaJs size={60}  color="#F7DF1E" className="blur-skills"/>
                 <p>JS</p>
                </div>
             <div>
                 <FaBootstrap size={60}  color="#7952B3" className="blur-skills"/>
                 <p>Bootstrap</p>
              </div>
            </div>
             <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                 <FaReact size={60}  color="#61DAFB" className="blur-skills"/>
                 <p>React</p>
                </div>
             <div>
                 <SiJquery size={60}  color="#0769AD" className="blur-skills"/>
                 <p>Jquery</p>
              </div>
            </div>
            </Card>
            
             
          </Col>
          
           <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive cardColor d-flex flex-column bg-transparent">
            <h3 className="text-center my-2">Back-End Technologies</h3>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                 <SiDotnet size={60}  color="#512BD4" className="blur-skills"/>
                 <p>Csharp</p>
                </div>
             <div>
                 <FaJava size={60}  color="#EA2D2E" className="blur-skills"/>
                 <p>Java</p>
              </div>
              
            </div>
             <div className="d-flex flex-column justify-content-center align-items-center bg-transparent">
               <div>
                 <SiDotnet size={60}  color="#512BD4" className="blur-skills"/>
                 
                  
                </div>
                <p>Dotnet (ASP .Net ,EF Core)</p>
            </div>
            
            </Card>
            
             
          </Col>
           <Col xs={10} md={3}>
           <Card className="p-3 card-img-responsive cardColor d-flex flex-column bg-transparent">
            <h3 className="text-center my-2">DataBase</h3>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                 <FaDatabase size={60}  color="#CC2927" className="blur-skills"/>
                 <p>SQL server</p>
              </div>
             </div>
             
            
            </Card>
            
             
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skill