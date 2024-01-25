import { useState } from 'react';
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/header";



function App() {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    const eliminarPaciente = (id) => {

        const pacientesActualizados = pacientes.filter( pacienteState => {
            return pacienteState.id !== id;
        })

        setPacientes(pacientesActualizados);
    }

    return (
        <div className=" container mx-auto mt-20">
            <Header />

            <div className="mt-12 md:flex">
                <Formulario 
                    pacientes={ pacientes }
                    paciente={ paciente }
                    setPaciente= { setPaciente }
                    setPacientes={ setPacientes }

                />
                <ListadoPacientes 
                    pacientes={ pacientes }
                    setPaciente={setPaciente}
                    eliminarPaciente = { eliminarPaciente }
                />

            </div>
        </div>
    )
}

export default App
