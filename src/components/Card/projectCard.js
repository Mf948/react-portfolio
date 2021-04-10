import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
  
        </ul>
        <a
                className="btn btn-dark col-lg-12 cardBtn"
                href={props.github}>Github<i className="fas fa-globe-asia cIcon"></i>
              </a>
              <a className="btn btn-dark col-lg-12 cardBtn"
                href={props.app}>Deployed<i className="fab fa-github cIcon"></i>
              </a>
      </div>
              
 
    </div>
  );
}

export default ProjectCard;
