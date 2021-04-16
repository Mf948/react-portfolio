import React from "react";

export default function ContactWrapper(props) {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
