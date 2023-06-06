import React from "react";
import Projects from "./project";
import roderic0 from "../images/roderic0.jpg";
import roderic2  from "../images/roderic2.jpg";
import roderic9 from "../images/roderic 9.png";
import roderic1 from "../images/roderic1.jpg";
import roderic3 from "../images/roderic3.jpg";
import roderic4 from "../images/roderic4.jpg";
import roderic5 from "../images/roderic5.png";
import  roderic6 from "../images/roderic6.jpg";
import  roderic7 from "../images/roderic7.jpg";
import "./portfolio.css";
 function Portfolio(){
// since in the my recent project they are of the same nature with what is changing is just the project number and the peoject image
// i build one component call  projects  and call it for the numbers of time passing the project number and project image as props 
    return(
<div className="portfolioMainDiv">
    <section id="projects">
    <h3>My recent works</h3>
    <h1>Portfolio</h1>
 
    
    <div className="CenterDiv">
    <div className="threeInOne">
    <Projects  num={1} url={roderic0} /> 
<Projects  num={2}  url={roderic2} />
<Projects   num={3}  url={roderic9} />
</div>

<div className="threeInOne">
    <Projects   num={4} url={roderic1} />
<Projects num={5} url={roderic3} />
<Projects num={6} url={roderic4} />

</div>

<div className="threeInOne">
<Projects num={7} url={roderic5} />
<Projects num={8}  url={roderic6}    />
<Projects  num={9}  url={roderic7} />
</div>

</div>

</section>

</div>
    );
}

export default Portfolio;