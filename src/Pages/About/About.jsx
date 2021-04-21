import React from "react";
import {MiAbout} from "./style.js";

export default function About() {
    return (
        <MiAbout>
            <h2>About</h2>
            <div className="sobreNosotros">
                <div className="somos">
                    <h3>¿Quienes Somos?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsam
                        facilis, magni deleniti quod eaque asperiores sed. Sunt molestias asperiores
                        accusantium harum quibusdam tempore quis, commodi distinctio consectetur
                    </p>
                </div>
                <div className="hacemos">
                    <h3>Qué Hacemos?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsam
                        facilis, magni deleniti quod eaque asperiores sed. Sunt molestias asperiores
                        accusantium harum quibusdam tempore quis, commodi distinctio consectetur
                    </p>
                </div>
                <div className="porque">
                    <h3>Por qué lo hacemos?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsam
                        facilis, magni deleniti quod eaque asperiores sed. Sunt molestias asperiores
                        accusantium harum quibusdam tempore quis, commodi distinctio consectetur
                    </p>
                </div>
            </div>
        </MiAbout>
    );
}
