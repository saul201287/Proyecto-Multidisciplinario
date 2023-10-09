import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Login.css";

function BasicExample() {
  return (
    <div className="Login">
      <div className="Formulario-login">
        <div>
            <div className="Titulo-login">
                <h1>Iniciar sesion</h1>
            </div>
          
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button size="lg" variant="danger" type="submit">
              Iniciar
            </Button>
          </Form>
           
        
        </div>
    
      </div>    
      <div className="Olvidar-contraseña">
              <a href="">¿Has olvidado tu contraseña?</a>
       </div>
    </div>
  );
}

export default BasicExample;
