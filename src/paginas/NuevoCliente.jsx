import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Add New Client</h1>
      <p className="mt-3">
        Please fill all the fields below to register a new client.
      </p>

      <Formulario />
    </>
  );
};

export default NuevoCliente;
