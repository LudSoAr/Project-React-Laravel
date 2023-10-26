import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false)



    return (

        <div className="side">
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`sidebar ${isOpen && "open"}`}>



                <ul>
                    <img src="img/logo.png" alt="logo" className="logo"/>

                    <li>
                        <button><Link to="/" className="link">Inicio</Link></button>
                    </li>
                    <li>
                        <button><Link to="/registrotrabajadores" className="link">Registro de Trabajadores</Link></button>
                    </li>
                    <li>
                        <button><Link to="/registroasistencia" className="link">Registro de Asistencia no borres mi nombre causa</Link></button>
                    </li>
                    <li>
                        <button><Link to="/registroasistencia" className="link">Ludwig</Link></button>
                    </li>
                    <li>
                        <button><Link to="/registroasistencia" className="link">Trabajando en la rama Ludwig</Link></button>
                    </li>
                    {/* <footer className="footer">
                    &copy; 2023 AprodePerú
                </footer> */}

                </ul>


            </div>

        </div>



    );
}

export default SideBar;
