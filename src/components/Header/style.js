import styled from "styled-components";

export const ContenidoHeader = styled.div`
    width: 100%;

    position. absolut;

    .menu-movil{

        border: none;
        width: 100%;
        display: none;

        h2 {
            margin-left: 30px;
        }

        @media (max-width: 768px) {
            display: flex;
            justify-content: space-between;
            background-color: royalblue;
            color: white;
            border-bottom: 1px solid blueviolet;
            padding: 10px;
            cursor: pointer;

            button {

                cursor: pointer;

                margin-right: 30px;

                background: transparent;

                color: white;

                border: 0;

            }
            svg{
                height: 24px;
                width: 24px;
            }
        }
    }

    nav {
        width: 100%;

        max-width: 1024px;

        margin: auto;

        display: flex;
        justify-content: space-evenly;
        


        ul {
            display: flex;
            flex-direction: row;
            float: right;
            width: 50%;

            li {
                width: 100%;
                list-style: none;
                float: right;

                .btn-pr {
                    float: left;
                    background-color: #616cff;
                    color: white;
                    font-size: 16px;
                    text-align: center;
                    text-decoration: none;
                    line-height: 50px;
                    margin: 5px;
                    width: 150px;
                    height: 48px;
                    border: none;
                    border-radius: 8px;
                    box-shadow: 3px 8px 5px grey;
                    cursor: pointer;
                }

                .btn-pr:hover {
                    box-shadow: 2px 5px 5px grey;
                }

                .btn-pr:active {
                    opacity: 90%;
                    box-shadow: none;
                }
            }
        }

        @media (max-width: 768px) {
            background-color: #fff;

            position:fixed
            width: 100%;
            height: calc;
            position: fixed;
            left: 100%;
            
            justify-content: center;

            transition: left .5s;
            
            ${({isOpen}) =>
                isOpen &&
                `
            left: 0;
        `}    

            ul {
                width: 100%;
                flex-direction: column;

                li {
                    display: block;
                    width: 100%;

                    .btn-pr {
                        width: 90%;
                        margin: 3px;
                        box-shadow: none;
                    }
                }
            }
        }
    }

`;
