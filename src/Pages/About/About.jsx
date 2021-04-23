import React from "react";
import {MiAbout} from "./style.js";

export default function About() {
    return (
        <MiAbout>
            <h2>About</h2>
            <div className="sobreNosotros">
                <div className="porque">
                    <h3>¿Por qué lo hacemos?</h3>
                    <p>
                        Muchas veces pensamos solo en nosotros, pero muy pocas vececes pensamos a
                        nivel de barrios, ciudades, paises, continentes o planetas, pero el universo
                        esta lleno de tantas sorpresas que compartiremos con ustes algunas de ellas.
                    </p>
                </div>
            </div>
        </MiAbout>
    );
}
