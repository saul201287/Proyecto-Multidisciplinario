import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../styles/Administrador.css";
import Animaciones from '../pages/Animaciones';

function FormularioDeRegistroDeUsuarios() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (

    <Animaciones>
 <div className="contain-administrador">
      <div className="formulario">
        <Form onSubmit={handleSubmit} method="POST">
          <div className="header">
            <h1>Registro de usuarios</h1>
            <div className="contenedor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="75"
                viewBox="0 0 81 75"
                fill="none"
              >
                  <path
                d="M45.8125 37.5C54.5765 37.5 62.3194 29.2474 63.0781 19.1021C63.455 14.0055 61.8563 9.25244 58.5758 5.72129C55.3302 2.2333 50.793 0.3125 45.8125 0.3125C40.7922 0.3125 36.2517 2.22168 33.0293 5.68809C29.7704 9.19268 28.1816 13.9557 28.5469 19.0988C29.2923 29.2457 37.0336 37.5 45.8125 37.5ZM80.2408 68.007C78.8397 60.2342 74.4651 53.7048 67.5921 49.1228C61.4877 45.0537 53.753 42.8125 45.8125 42.8125C37.872 42.8125 30.1373 45.0537 24.0329 49.1211C17.1599 53.7031 12.7854 60.2325 11.3842 68.0054C11.0638 69.7867 11.4987 71.5481 12.5778 72.8381C13.0673 73.4259 13.6818 73.897 14.3766 74.217C15.0714 74.537 15.8289 74.6977 16.5938 74.6875H75.0312C75.7965 74.6984 76.5546 74.5382 77.25 74.2185C77.9454 73.8988 78.5605 73.4277 79.0505 72.8397C80.1263 71.5498 80.5612 69.7884 80.2408 68.007ZM15.2656 42.8125V36.1719H21.9062C22.6107 36.1719 23.2864 35.892 23.7845 35.3939C24.2826 34.8957 24.5625 34.2201 24.5625 33.5156C24.5625 32.8111 24.2826 32.1355 23.7845 31.6374C23.2864 31.1392 22.6107 30.8594 21.9062 30.8594H15.2656V24.2188C15.2656 23.5143 14.9858 22.8386 14.4876 22.3405C13.9895 21.8424 13.3139 21.5625 12.6094 21.5625C11.9049 21.5625 11.2293 21.8424 10.7311 22.3405C10.233 22.8386 9.95312 23.5143 9.95312 24.2188V30.8594H3.3125C2.60802 30.8594 1.93239 31.1392 1.43425 31.6374C0.936104 32.1355 0.65625 32.8111 0.65625 33.5156C0.65625 34.2201 0.936104 34.8957 1.43425 35.3939C1.93239 35.892 2.60802 36.1719 3.3125 36.1719H9.95312V42.8125C9.95312 43.517 10.233 44.1926 10.7311 44.6908C11.2293 45.1889 11.9049 45.4688 12.6094 45.4688C13.3139 45.4688 13.9895 45.1889 14.4876 44.6908C14.9858 44.1926 15.2656 43.517 15.2656 42.8125Z"
                fill="#FBFBFB"
              />
              </svg>
            </div>
          </div>
          <div className="body">
            <Form.Group controlId="nombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" name="nombre" />
            </Form.Group>
            <Form.Group controlId="correo">
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" name="correo" />
            </Form.Group>
            <Form.Group controlId="rol">
              <Form.Label>Rol:</Form.Label>
              <Form.Control type="text" name="rol" />
            </Form.Group>
            <Button variant="danger" size='lg' type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </div>
    </div>

    </Animaciones>
   
  );
}

export default FormularioDeRegistroDeUsuarios;
