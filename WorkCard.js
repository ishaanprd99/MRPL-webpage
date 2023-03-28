import "./WorkCardStyles.css"
import canteen from "../assets/canteen.png"
import car from "../assets/car.png"
import email from "../assets/Email.png"
import eoffice from "../assets/eoffice1.png"
import intranet from "../assets/Intranet.png"
import itsupport from "../assets/itsupport12.png"
import materialpass from "../assets/materialpass.png"
import medicalcard from "../assets/medical_card.png"
import personal from "../assets/Personal.png"
import providentfund from "../assets/providendfund.png"
import RISE from "../assets/RISE.png"
import safetyfirst from "../assets/safety_first.png"
import shramik from "../assets/shramik.png"
import telephone from "../assets/telephone1.png"
import visitorpass from "../assets/visitorpass.png"
import workpermit from "../assets/workpermit.png"
import connections from "../assets/connections.png"
import calendar from "../assets/calendar.png"
import fire from "../assets/firecall.png"
import hall from "../assets/hall.png"
import employee from "../assets/employee.png"
import safetystats from "../assets/safetystats.png"
import rainfall from "../assets/rainfall.png"


import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> MRPL Links </h1>
        <div className="project-container">
            <div className="project-card"> 
            <a href="http://mrplnet/faces/telesearch.xhtml" target="_blank" > 
            <img src={telephone} alt="image" />
            <h1> Telephone Directory</h1>
            </a>
          
            </div>


            <div className="project-card"> 

            <a href="https://webmailbalancer.mrpl.co.in/" target="_blank" > 
            <img src={email} alt="image" />
            <h1> MRPL MAIL</h1>
             </a>
          
            </div>


            <div className="project-card"> 
            <a href="https://mrpless.mrpl.co.in/irj/portal" target="_blank" >  
            <img src={intranet} alt="image" />
            <h1>Corporate Intranet</h1>
            </a>

           
            </div>
           

            <div className="project-card"> 
            <a href="https://connections.mrpl.co.in/homepage/login/" target="_blank" > 
            <img src={connections} alt="image" />
            <h1> Connections </h1>
             </a>

        
            </div>

            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/Home.xhtml" target="_blank" > 
            <img src={personal} alt="image" />
            <h1>Personal Section </h1>
             </a>

         
            </div>


            <div className="project-card"> 
            <a href="https://eoffice.mrpl.co.in/egov/login.jsp" target="_blank" >
            <img src={eoffice} alt="image" />
            <h1>E-Office</h1>  </a>

            
            </div>

            <div className="project-card"> 
            <a href="https://mrplapps.mrpl.co.in/visitorpass/" target="_blank" > 
            <img src={visitorpass} alt="image" />
            <h1> Visitor Pass</h1> </a>

       
            </div>

           

            <div className="project-card"> 
            <a href="https://mrpless.mrpl.co.in/sap/bc/webdynpro/sap/zhrwd_suggestion_system#" target="_blank" > 
            <img src={RISE} alt="image" />
            <h1> Suggestion Scheme</h1> </a>

       
            </div>

            <div className="project-card"> 
            <a href="https://factohr.mrpl.co.in/ESSLogin" target="_blank" >
            <img src={providentfund} alt="image" />
            <h1> Provident Fund</h1>  </a>

         
            </div>

            <div className="project-card"> 
            <a href="http://172.16.2.21/mrplpts/login" target="_blank" > 
            <img src={workpermit} alt="image" />
            <h1> Permit Tracker </h1> </a>

           
            </div>

            <div className="project-card"> 
            <a href="https://ithelpdesk.mrpl.co.in/" target="_blank" > 
            <img src={itsupport} alt="image" />
            <h1> IT Help Desk</h1> </a>

          
            </div>

            <div className="project-card"> 
            <a href="https://mrplapps.mrpl.co.in/emedicalcard/mrplh/pages/login.xhtml" target="_blank" > 
            <img src={medicalcard} alt="image" />
            <h1> e-Medical Card</h1> </a>

           
            </div>

           

            <div className="project-card"> 
            <a href="https://mrplapps.mrpl.co.in/MATERIALPASS/faces/index.xhtml" target="_blank" > 
            <img src={materialpass} alt="image" />
            <h1> Material Pass </h1>
             </a>

         
            </div>

            
            <div className="project-card"> 
            <a href="https://mrplapps.mrpl.co.in/vehicle/faces/login.xhtml" target="_blank" > 
            
            <img src={car} alt="image" />
            <h1> Vehicle Booking</h1> </a>

            </div>

            <div className="project-card"> 
            <a href="http://canteenatmn:8080/MRPL_ADVBOOKING/Login.jsp" target="_blank" > 
            <img src={canteen} alt="image" />
            <h1> Canteen System</h1> </a>

    
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/safetymanagementsystem.xhtml" target="_blank" >  
            
            <img src={safetyfirst} alt="image" />
            <h1> Safety Management System</h1></a>

            </div>

            <div className="project-card"> 
            <a href="https://mrplapps.mrpl.co.in/shramikUI/faces/index.xhtml" target="_blank" > 
            <img src={shramik} alt="image" />
            <h1> Contact Management</h1> </a>

           
            </div>

            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/Calendar.xhtml" target="_blank" > 
            <img src={calendar} alt="image" />
            <h1> Calendar</h1> </a>

           
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/safetystat.xhtml" target="_blank" > 
            <img src={safetystats} alt="image" />
            <h1> Safety Stats</h1> </a>

           
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/rainfall.xhtml" target="_blank" > 
            <img src={rainfall} alt="image" />
            <h1> Rainfall</h1> </a>

           
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/checkin.xhtml" target="_blank" > 
            <img src={employee} alt="image" />
            <h1> Employee IN/OUT</h1> </a>

           
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/rota.xhtml" target="_blank" > 
            <img src={fire} alt="image" />
            <h1> FireCall Rota</h1> </a>

           
            </div>


            <div className="project-card"> 
            <a href="http://mrplnet/MRPL/faces/TrainingHallStatus.xhtml" target="_blank" > 
            <img src={hall} alt="image" />
            <h1> Hall Booking Stats</h1> </a>

           
            </div>




        </div>

        
    </div>
  )
}

export default WorkCard
