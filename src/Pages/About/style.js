import styled from "styled-components";

export const MiAbout = styled.div`
    whidth: 100%;
    height: 600px;
    max-width: 1024px;
    background: salmon;

    margin: auto;
    padding: 20px;

    h2 {
        margin: 20px;
        text-align: center;
    }

    h3 {
        text-align: center;
        color: white;
    }
    .sobreNosotros {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;

        @media (max-width: 990px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            justify-items: center;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-gap: 10px;
            justify-items: center;
        }
    }
    .sobreNosotros > div {
        width: 300px;
        background: royalblue;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 2px 2px 5px violet;
    }
`;
