import React from "react";

export default function ContactSection() {
  return (
    <div className="column is-two-thirds has-text-left">
      <h1 className="title is-1">Contact </h1>
      <p className="is-size-4">
        I'm available for local projects as well as potential employment
        opportunities. Use the form to inquire about rates and availability, or
        just to say hi.
      </p>
      <div className="social-media">
        <a
          href="https://github.com/Mf948"
          target="_blank"
          class="button is-github"
        >
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://linkedin.com/in/xferreiramatt"
          target="_blank"
          class="button is-linkedin"
        >
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          class="button is-light is-twitter"
        >
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
