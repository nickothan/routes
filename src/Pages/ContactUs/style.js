import styled from "styled-components";

export const MiContactUs = styled.div`
    whidth: 100%;
    height: 600px;
    max-width: 1024px;
    background: royalblue;

    margin: auto;
    padding: 20px;

    h2 {
        margin: 20px;
        color: salmon;
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

        padding: 20px;
        background: #f5f5f5;
        border-radius: 8px;
    }

    input {
        width: 200px;
        height: 24px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`;
