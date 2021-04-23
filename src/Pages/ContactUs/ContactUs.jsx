import React from "react";

import {MiContactUs} from "./style.js";

export default function ContactUs() {
    return (
        <MiContactUs>
            <div className="contenidoContactUs">
                <div className="descripcionContactUs">
                    <h2>Contact Us</h2>
                    <p>
                        si quieres contactarte con nosotros lo puedes hacer por medio de este
                        formulario, nuestro equipo de trabajo estara al tanto de lo que necesites.
                    </p>
                </div>
                <form action="">
                    <h3>
                        Formulario de contacto <br />
                    </h3>

                    <label htmlFor="nombre"> nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="nombre" />
                    <label htmlFor="">Correo</label>
                    <input type="mail" name="Email" id="Email" placeholder="Email" />
                    <label htmlFor="">Telefono</label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="Telefono" />

                    <button type="submit" className="btn-pr" value="Enviar">
                        Enviar
                    </button>
                </form>
            </div>
        </MiContactUs>
    );
}
