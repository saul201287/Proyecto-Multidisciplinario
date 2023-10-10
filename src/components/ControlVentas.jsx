import React from 'react'
import Form from 'react-bootstrap/Form';


function ControlVentas() {
  return (
    <div className='control-ventas'>

      <div className='informacion-venta'>


 <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label> <h2>Ventas del dia:</h2> </Form.Label>
      <Form.Control type="date" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Detalles de las ventas del dia</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
      </div>


    </div>
   
  )
}

export default ControlVentas