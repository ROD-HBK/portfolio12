import React from "react";
import "./about.css";
import {FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
import me from "../images/Roderic.jpeg";
 function About(){

    return(
<div className="aboutDivStart" >
  <section id="about">
    <center>
  
    <h1>ABOUT ME</h1>
 </center>

    <div className="mainDivAbout">
<div className="leftSide">
    <div className="leftMainDiv">
           <div className="imageDiv">
    <img src={me} alt="" />
           </div>
    </div></div>

<div className="rightSide">
    <div className="up">
        <div className="experience one"><br />
           
           <br />
           <FaAward/>
   <h3>Experience</h3>
   <h4>4+ Years</h4>
        </div>
        <div className="clients one"><br />
      <br />
      <FaUsers/>
   <h3>Clients</h3><br />
   <h5>13 world widely</h5>
        </div>
        <div className="project one"><br />
        <br />
        <VscFolderActive/>
   <h3>Projects</h3>
   <h4>4 completed </h4>
        </div>
    </div>
  <div className="plainText"><h4>
  I am a young software engineer trained at the Faculty of Engineering of the University of Buea (FET) where i will obtain my B.eng in the year 2025. I will apply for internship to MTN Company so as to gain experience while on internship.I am a holder of the cameroon Advanced level certificate.I am doing  my university studies at FET in English which i can express myself in English. 

     </h4>
  </div>

</div>


</div>
<button id="btnTalk">let's talk</button>
</section>
</div>
    );
}

export default About;