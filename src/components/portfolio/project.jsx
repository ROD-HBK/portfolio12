import React from "react";
import "./project.css"
 function Projects(props){

    return(

<div className="mainDivProject">
<br />
<div className="divImage">
<img src={props.url} alt="" />
</div>
<br />
<p>project {props.num}</p>
<br />
<div className="btnDiv">
<button id="btnGit">Github</button>
<button id="btnDemo">Live Demo</button>
</div>

</div>



    );
}

export default Projects;