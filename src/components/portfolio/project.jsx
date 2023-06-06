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
project {props.num} <br />
<br />
<div className="btnDiv">
<button id="btnGit">
<a href="https://github.com/ROD-HBK" className= 'btn' target = '_blank'>Github</a>

</button>
<button id="btnDemo">
<a href="https://youtube.com" className= 'btn' target = '_blank'>Live Demo</a>
</button>
</div>

</div>



    );
}

export default Projects;