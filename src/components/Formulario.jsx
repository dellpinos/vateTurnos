import { useState, useEffect } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = () => {
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agrega los Pacientes y {' '} <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        className="border-2 p-3 rounded-lg w-full mt-3 placeholder-indigo-200"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        className="border-2 p-3 rounded-lg w-full mt-3 placeholder-indigo-200"
                        type="text"
                        placeholder="Nombre de la propietario" />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="border-2 p-3 rounded-lg w-full mt-3 placeholder-indigo-200"
                        type="email"
                        placeholder="correo@correo.com" />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        className="border-2 p-3 rounded-lg w-full mt-3 placeholder-indigo-200"
                        type="date"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        className="border-2 p-3 rounded-lg w-full mt-3 placeholder-indigo-200"
                        id="sintomas"
                        placeholder="Síntomas del paciente"
                    >

                    </textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all"
                    value="Agregar Paciente"
                />

            </form>
        </div>
    )
}

export default Formulario;