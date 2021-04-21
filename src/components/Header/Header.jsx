import {Header} from "./style.js";

export default function Resume() {
    return (
        <Header>
            <div className="contenidoHeader">
                <div className="logo"></div>
                <nav>
                    <button>Inicio</button>
                    <button>Cotactanos</button>
                    <button>Sobre nosotros</button>
                </nav>
            </div>
        </Header>
    );
}
