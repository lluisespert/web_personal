import React from "react";

export const Navbar = () => {

    return (

        <nav className="navbar navbar-dark bg-dark navbar-expand-md">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">Inicio</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse text-align-left" id="navbarScroll">

                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                        <li className="nav-item">

                            <a className="nav-link active" aria-current="page" href="#">¿Quien soy?</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Formación</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Experiencia laboral</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Redes Sociales</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">Contactactame</a>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    )

}