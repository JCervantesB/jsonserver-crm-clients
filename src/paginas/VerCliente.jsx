import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p>No Results</p>
  ) : (
    <div>
      <h3 className="font-black text-2xl text-blue-900">
        See Client: {cliente.nombre}
      </h3>
      <p className="mt-3">Client Data</p>

      {cliente.nombre && (
        <p className="text-2xl text-gray-600 mt-10">
          <span className="text-gray-800 uppercase font-bold">Client: </span>
          {cliente.nombre}
        </p>
      )}
      {cliente.email && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
      )}
      {cliente.telefono && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">
            Phone number:{" "}
          </span>
          {cliente.telefono}
        </p>
      )}
      {cliente.empresa && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">
            Coorporation:{" "}
          </span>
          {cliente.empresa}
        </p>
      )}
      {cliente.notas && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notes: </span>
          {cliente.notas}
        </p>
      )}
    </div>
  );
};

export default VerCliente;
