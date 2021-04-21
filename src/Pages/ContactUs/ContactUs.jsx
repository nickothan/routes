import React from "react";

import {MiContactUs} from "./style.js";

export default function ContactUs() {
    return (
        <MiContactUs>
            <h2>Contact Us</h2>
            <div className="contenidoContactUs">
                <div className="descripcionContactUs">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum rerum
                        neque odit obcaecati vitae aliquam similique tempore perferendis! Voluptate
                        at itaque blanditiis magni perferendis, earum quam sunt magnam voluptatem?
                        Veniam, nesciunt? Aliquam, quibusdam culpa? Reiciendis harum, eveniet
                        doloremque veritatis repellat, rerum, modi nam exercitationem culpa non
                        quidem nostrum obcaecati omnis ratione. Quia adipisci excepturi, facilis ea
                        maiores labore aspernatur.
                    </p>
                </div>
                <form action="">
                    <label htmlFor="">nombre</label>
                    <input type="text" placeholder=""/>
                    <label htmlFor="">Correo</label>
                    <input type="text" />
                    <label htmlFor="">Telefono</label>
                    <input type="text" />

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </MiContactUs>
    );
}
