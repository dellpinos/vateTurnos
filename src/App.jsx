import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/header";



function App() {



    return (
        <div className=" container mx-auto mt-20">
            <Header />

            <div className="mt-12 md:flex">
                <Formulario />
                <ListadoPacientes />

            </div>
        </div>
    )
}

export default App
