import styled from "styled-components";

export const MiHome = styled.div`
    whidth: 100%;

    max-width: 1024px;
    background: royalblue;

    margin: auto;
    padding: 20px 10px;

    h2 {
        margin: 20px;
        color: salmon;
        text-align: center;
    }
    .presentacion {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        p {
            color: white;
            padding: 10px;
        }

        img {
            justify-self: center;

            max-width: 100%;
            border-radius: 15px;
        }
    }
    .cuadros {
        max-width: 100%;
        padding: 20px 5px;

        ul {
            display: flex;
            flex-flow: wrap;

            justify-content: center;

            li {
                width: 150px;

                margin: 10px 20px 0 0;

                background-color: #000;
                display: grid;
                color: white;
                border-radius: 10px;
                justify-items: center;
                align-items: center;
            }
        }

        img {
            width: 90%;
        }
    }
    .noticias {
        padding: 20px 5px;
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .noticiaPrincipal {
            background-color: #000;
            color: white;
            padding: 20px 5px;

            display: flex;
            flex-flow: column;
            align-items: center;

            border-radius: 8px;

            img {
                width: 100%;
                max-width: 450px;

                justify-self: center;
            }

            .descripcionNotocia {
                display: grid;
                grid-template-rows: 1fr 2fr 1fr;
                padding: 10px;
            }
        }

        .noticiasActuales {
            display: grid;
            grid-gap: 10px;
            justyfi-content: space-beween;

            color: white;

            .noticiaActual {
                display: flex;
                flex-flow: row;
                align-items: center;

                padding: 5px;
                background-color: #000;

                border-radius: 5px;

                img {
                    max-width: 100px;
                    max-height: auto;
                }

                .descripcionNotocia {
                    margin-left: 10px;
                }
            }
        }
    }
`;
