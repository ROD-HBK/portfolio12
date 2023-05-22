import React from "react";
import "./about.css";
import {FaGithub} from 'react-icons/fa'
import me from "../images/junior.jpg";
 function About(){

    return(
<div className="aboutDivStart">
    <center>
  <h5>Get to know</h5> 
    <h2>About me</h2>
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
           <span><FaGithub/></span><br />
   <h3>Experience</h3>
   <h4>1+ Years</h4>
        </div>
        <div className="clients one"><br />
      <span><FaGithub/></span><br />
   <h3>Clients</h3><br />
   <h5>3 world widely</h5>
        </div>
        <div className="project one"><br />
        <span><FaGithub/></span><br />
   <h3>Projects</h3>
   <h4>2 completed </h4>
        </div>
    </div>
  <div className="plainText"><h4>
  I am a young software engineer trained at the Faculty of Engineering of the University of Buea (FET). 
  I get my B.eng in 2021. Being on demand for experience, I apply to Camsol.io which accepts me and gives me 
  the chance to work on real business projects in order to gain experience. From July 2021 to today, I learned
   technologies such as react, react native, in short the MERN stack, I am still learning and counting on the support
    of Camsol to increase my knowledge at end of being an engineer not only graduate, but also qualified. I hold 
    a French-speaking baccalaureate D sexion, my university studies at FET I did in English. I can therefore
     express myself in French and in English (average).

     </h4>
  </div>

</div>


</div>
<button id="btnTalk">let's talk</button>
</div>
    );
}

export default About;