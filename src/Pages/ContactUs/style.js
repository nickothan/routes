import styled from "styled-components";

export const MiContactUs = styled.div`
    whidth: 100%;
    height: 600px;
    max-width: 1024px;
    background: royalblue;

    margin: auto;
    padding: 20px;

    h2 {
        text-align: center;
    }
    .contenidoContactUs {
        display: grid;
        grid-template-columns: 3fr 2fr;
    }

    form {
        display: grid;
        grid-template-rows: auto;
        justify-content: center;
    }

    input {
        width: 200px;
        height: 24px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`;
