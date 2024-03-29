
import { Paciente } from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold ">Pacientes y Turnos</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                            key={paciente.id}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className=" font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Deberias agregar al primer paciente. {''}
                        <span className="text-indigo-600 font-bold "> Podrás verlos aquí.</span>
                    </p>
                </>
            )}




        </div>
    )
}

export default ListadoPacientes;
