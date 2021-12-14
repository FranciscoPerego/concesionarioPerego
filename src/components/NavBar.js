import React from 'react'

export const NavBar = () => {
    return (
                <nav className="navBar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                  <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#page-top">PEREGO LUXURY CAR RENTALS</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Principal</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Marcas de autos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Tipos de autos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Sobre nosotros</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              );
            }

export default NavBar