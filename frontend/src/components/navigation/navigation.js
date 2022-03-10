/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";

const Navigation = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <ul class="navbar-nav" style={{display : "block"}}>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Academics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;