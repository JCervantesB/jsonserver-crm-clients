import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleEliminar }) => {
  const navigate = useNavigate();

  const { nombre, empresa, email, telefono, notas, id } = cliente;

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>{" "}
          {email}{" "}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>{" "}
          {telefono}{" "}
        </p>
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md flex items-center justify-center"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          See
        </button>

        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md flex items-center justify-center"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          Edit
        </button>

        <button
          type="button"
          className="bg-white border-2 border-red-400 hover:border-red-600 hover:border-3 block w-full text-red-600 p-2 uppercase font-bold text-xs mt-3 rounded-md flex items-center justify-center"
          onClick={() => handleEliminar(id)}
        >
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
