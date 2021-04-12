import React from 'react'
import {Form, Group, Label, Control } from 'react-bootstrap'

export default function FormmCard() {
    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Messege</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    )
}
