import "./App.css"

import { Container, Row, Table } from "react-bootstrap"
import { MdSubtitles } from "react-icons/md";
import { ImOffice, ImProfile } from "react-icons/im";
import { BsPersonWorkspace } from "react-icons/bs";
import { RxLapTimer } from "react-icons/rx";
import Stars from "./Stars";

const Internship = () => {
  return (
    <div className="glass-photo">
        <Stars />
        <div className="d-flex justify-content-center align-items-center w-100 mx-auto p-2 ">
              <h3 className="page-title">Internship</h3>
        </div>
      <Container className="d-flex justify-content-center align-items-center gap-3 vh-90 mt-3">
        <Row className='d-flex flex-row justify-content-around align-items-center' >
            <Table  className="rounded-4  overflow-hidden shadow-sm table table-bordered table-striped table-hover table-responsive table-transparent w-75 shadow">
              <tbody className="p-3">
                <tr>
            <th>< MdSubtitles   className="mx-1" ></MdSubtitles>Title</th>
            <td>Software Engineer Intern</td>
           </tr>
           <tr>
            <th><ImOffice className="mx-1"></ImOffice>Company</th>
            <td>Gislen Sotware</td>
           </tr>
           <tr>
            <th><BsPersonWorkspace className="mx-1"></BsPersonWorkspace>Role</th>
            <td>Software Engineer Trainee</td>
           </tr>
           <tr>
            <th>< RxLapTimer className="mx-1"></RxLapTimer>Duration</th>
            <td>6 Months (Apr 2025 - Oct 2025)</td>
           </tr>
            <tr>
            <th><ImProfile className="mx-1"></ImProfile>Summary</th>
            <td> Completed intensive training focused on C#, ASP.NET, Entity Framework Core, SQL Server, HTML, CSS, JavaScript,
 Bootstrap, jQuery, and ReactJS.
 Gained hands-on understanding of front-end and back-end web development using the .NET technology stack.
 Learned to apply software development principles, database connectivity, and responsive UI design in real-world
 scenarios</td>
           </tr>
                </tbody>
           
        </Table>
        <div >
         
        </div>
        </Row>
       
      </Container>
    </div>
  )
}

export default Internship