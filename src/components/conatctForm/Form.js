import React from 'react'
import {Form, Group, Label, Control } from 'react-bootstrap'

export default function FormmCard() {
    return (
      <div className="column is-one-third has-text-left">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input is-medium" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input is-medium" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea is-medium"></textarea>
        </div>
      </div>
      <div className="control">
        <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
      </div>
    </div>
    )
}
