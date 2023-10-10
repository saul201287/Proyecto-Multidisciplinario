import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table"; 
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import Swal from "sweetalert2";
import Animaciones from "../pages/Animaciones"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faUserClock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Infor() {

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [coordinadorSeleccionado, setCoordinadorSeleccionado] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error al obtener los registros:", error);
      }
    };

    fetchData();
  }, [searchText]);

 

  const handleLiquidarCuentaClick = async (id_coordinador) => {
    const confirmar = await Swal.fire({
      title: "¿Estás seguro que deseas eliminar al usuario?",
      text: "Los datos del usuario serán eliminados permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar usuario",
      cancelButtonText: "No, cancelar",
    });

    if (!confirmar.isConfirmed) return;

    try {
      const response = await axios.delete(
        ``
      );
      if(response.data.mensaje === "Coordinador eliminado correctamente"){
        Swal.fire(
          "Usuario eliminado",
          "Los datos del usuario han sido eliminados.",
          "success"
        );
      }else{
        Swal.fire(
          "Usuario no eliminado",
          "Los datos del usuario no han sido eliminados.",
          "error"
        );
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setData(data.filter((item) => item.id_coordinador !== id_coordinador));
    setShowBackButton(false);
    Swal.fire(
      "Usuario eliminado",
      "Los datos del usuario han sido eliminados.",
      "success"
    );
  };

  const handleBackClick = () => {
    setShowComponent(null);
    setShowBackButton(false);
  };
  const trimmedSearchText = searchText.trim();
  const searchKeywords = trimmedSearchText.split(" ");

  const removeDiacritics = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredData = Array.isArray(data)
    ? data.filter((pago) => {
        if (trimmedSearchText === "") {
          return true;
        }

        return (
          searchKeywords.every((keyword) => {
            const lowercasedKeyword = removeDiacritics(keyword.toLowerCase());
            const lowercasedNombres = removeDiacritics(
              pago.nombres.toLowerCase()
            );
            const lowercasedApellidoPaterno = removeDiacritics(
              pago.apellido_paterno.toLowerCase()
            );
            const lowercasedApellidoMaterno = removeDiacritics(
              pago.apellido_materno.toLowerCase()
            );

            return (
              lowercasedNombres.includes(lowercasedKeyword) ||
              lowercasedApellidoPaterno.includes(lowercasedKeyword) ||
              lowercasedApellidoMaterno.includes(lowercasedKeyword)
            );
          }) &&
          pago.id_coordinador ===
            JSON.parse(localStorage.getItem("coordinador")).id_coordinador
        );
      })
    : [];

  let message = null;

  if (filteredData.length === 0 && !searchText) {
    message = <div>No hay usuarios registrados.</div>;
  }



  return (
    <Animaciones>
      <section
        className="container mt-5"
        style={{
          boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "15px",
          marginBottom:"50px"
        }}
      >
        <div className="table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={""}>
                  <td>{item.nombres}</td>
                  <td>{item.correo}</td>
                  <td>{item.rango}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleLiquidarCuentaClick(item.id_coordinador)}
                      style={{
                        marginLeft: "20px",
                        backgroundColor: "#dc3545",
                        borderRadius: "15px",
                        marginRight: "0px",
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      &nbsp;Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody> 
            &nbsp;&nbsp;{message}
          </Table>
        </div>
      </section>
     
    </Animaciones>
  );
}

export default Infor;
