import styled from "styled-components";

export const MiContactUs = styled.div`
    whidth: 100%;
    height: 400px;
    max-width: 1024px;
    background: royalblue;

    color: white;
    margin: auto;
    padding: 20px;

    h2 {
        margin: 20px;
        text-align: center;
    }
    .contenidoContactUs {
        display: grid;
        grid-template-columns: 3fr 2fr;
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        p {
            padding: 10px;
        }
    }

    form {
        display: grid;
        grid-template-rows: auto;
        justify-content: center;
        justify-items: center;
        color: royalblue;
        padding: 20px;
        background: #f5f5f5;
        border-radius: 8px;

        h3 {
            margin-bottom: 10px;
        }

        label {
            justify-self: stretch;
        }

        input {
            margin-top: 5px;
            width: 250px;
            height: 24px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        button {
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

        button:hover {
            box-shadow: 2px 5px 5px grey;
        }

        button:active {
            opacity: 90%;
            box-shadow: none;
        }
    }
`;
