import styled from "styled-components";

export const MiAbout = styled.div`
    whidth: 100%;
    height: 600px;
    max-width: 1024px;
    background: red;

    margin: auto;
    padding: 20px;

    h2,
    h3 {
        text-align: center;
        color: white;
    }
    .sobreNosotros {
        display: flex;
        justify-content: space-evenly;
    }
    .sobreNosotros > div {
        width: 300px;
        background: royalblue;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 2px 2px 5px violet;
    }
`;
