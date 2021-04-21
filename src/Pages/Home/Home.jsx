import React from "react";

import {MiHome} from "./style.js";

export default function Home() {
    return (
        <MiHome>
            <h2>El universo</h2>
            <div className="home">
                <div className="presentacion">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta corporis
                        voluptas dolorem esse amet vero molestiae rerum dolore sequi at cumque fugit
                        alias repellendus, a incidunt quidem aperiam error? Architecto beatae
                        veritatis voluptas rem rerum distinctio facere quia dolorem sunt! Ipsa,
                        perferendis asperiores molestias sunt repellendus nemo esse qui quis iste
                        exercitationem doloremque quos. Sit ducimus totam sapiente sunt. Veritatis
                        doloremque voluptas minima magni ea aliquam perferendis atque tempora
                        tempore animi. Cupiditate velit ex nemo praesentium hic maiores explicabo,
                        quibusdam est esse. Ipsum debitis iusto, iste consequatur repudiandae ex.
                        Voluptates, debitis id, assumenda temporibus in adipisci suscipit atque eius
                        dolor commodi excepturi est eos reiciendis quis natus odio ducimus cumque
                        impedit neque illum consequatur aut quam repudiandae. Porro, maxime! Quas
                        beatae nihil voluptate architecto quam quaerat assumenda quos possimus
                    </p>
                    <img
                        src="https://storage.googleapis.com/www-paredro-com/uploads/2019/07/df45b364-pia15416_small.jpg"
                        alt="Espacio"
                    />
                </div>

                <div className="cuadros">
                    <ul>
                        <li>
                            <h3>Mercurio</h3>
                            <img
                                src="https://www.publicdomainpictures.net/pictures/190000/velka/planet-mercury.jpg"
                                alt="Mercurio"
                            />
                        </li>
                        <li>
                            <h3>Venus</h3>
                            <img
                                src="https://image.winudf.com/v2/image1/Y29tLmNvZGVrb25kaXRvci52ZW51c19zY3JlZW5fMTFfMTU0MTQxOTgwN18wMDU/screen-11.jpg?fakeurl=1&type=.jpg"
                                alt="Venus"
                            />
                        </li>
                        <li>
                            <h3>Tierra</h3>
                            <img
                                src="https://i.vimeocdn.com/video/584220560_640x360.jpg"
                                alt="Tierra"
                            />
                        </li>
                        <li>
                            <h3>Marte</h3>
                            <img
                                src="https://www.fondos12.com/data/big/21/marte-7138-1920x1200__wallpaper_480x300.jpg"
                                alt="Marte"
                            />
                        </li>
                        <li>
                            <h3>Jupiter</h3>
                            <img
                                src="https://www.nationalgeographic.com.es/medio/2019/02/08/auroras-en-jupiter_f88e33ba_1000x1000.jpg"
                                alt="Jupiter"
                            />
                        </li>
                        <li>
                            <h3>Neptuno</h3>
                            <img
                                src="https://img2.rtve.es/imagenes/neptuno-cumple-ano/1310488106612.jpg"
                                alt="Neptuno"
                            />
                        </li>
                        <li>
                            <h3>Saturno</h3>
                            <img
                                src="https://static.turbosquid.com/Preview/001199/287/7R/4k-saturn-3D-model_0.jpg"
                                alt="Saturno"
                            />
                        </li>
                        <li>
                            <h3>Urano</h3>
                            <img
                                src="https://www.muycomputer.com/wp-content/uploads/2019/06/anillos-de-Urano.jpg"
                                alt="Urano"
                            />
                        </li>
                        <li>
                            <h3>Pluton</h3>
                            <img
                                src="https://i.pinimg.com/originals/2e/8c/0d/2e8c0dfedf869a29e1253cafc42bc39b.jpg"
                                alt="Pluton"
                            />
                        </li>
                    </ul>
                </div>
                <div className="noticias">
                    <div className="noticiaPrincipal">
                        <img
                            src="https://i.pinimg.com/originals/5a/ad/bf/5aadbfd2356924cace9b76f18c360e9a.png"
                            alt="Imagen de noticia principal"
                        />
                        <div className="descripcionNotocia">
                            <h3>El Universo</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fuga
                                tempore adipisci eius veniam distinctio, ! Nam.
                            </p>
                            <p> 10/20/2050</p>
                        </div>
                    </div>
                    <div className="noticiasActuales">
                        <div className="noticiaActual">
                            <img
                                src="https://i.pinimg.com/originals/5a/ad/bf/5aadbfd2356924cace9b76f18c360e9a.png"
                                alt="Imagen de noticia principal"
                            />
                            <div className="descripcionNotocia">
                                <h3>El Universo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p> 10/20/2050</p>
                            </div>
                        </div>
                        <div className="noticiaActual">
                            <img
                                src="https://i.pinimg.com/originals/5a/ad/bf/5aadbfd2356924cace9b76f18c360e9a.png"
                                alt="Imagen de noticia principal"
                            />
                            <div className="descripcionNotocia">
                                <h3>El Universo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p> 10/20/2050</p>
                            </div>
                        </div>
                        <div className="noticiaActual">
                            <img
                                src="https://i.pinimg.com/originals/5a/ad/bf/5aadbfd2356924cace9b76f18c360e9a.png"
                                alt="Imagen de noticia principal"
                            />
                            <div className="descripcionNotocia">
                                <h3>El Universo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p> 10/20/2050</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MiHome>
    );
}
