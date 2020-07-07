import React from "react";

import { Container } from "./styles";

import { getEvents } from "../../store/localData";

function HackathonRoute({ match }) {
    const targetEvent = getEvents()[match.params.id];

    return (
        <Container>
            <div className="row">
                <div className="side-bar">
                    <div className="event-info">
                        <img className="event-logo" src={`${process.env.PUBLIC_URL}/img/${targetEvent.imgUrl || "MEGA-HACK.png"}`} alt="event-logo" />
                        <h1>{targetEvent.name}</h1>
                    </div>
                    <div className="side-bar-container">
                        <div className="nav-links col">
                            <a className="nav-link" href="/#">
                                Informações básicas
                            </a>
                            <a className="nav-link" href="/#">
                                Entregáveis
                            </a>
                            <a className="nav-link" href="/#">
                                Habilidades
                            </a>
                            <a className="nav-link" href="/#">
                                Programação
                            </a>
                            <a className="nav-link" href="/#">
                                Planejamento de divulgação
                            </a>
                            <a className="nav-link" href="/#">
                                Critérios de avaliação
                            </a>
                            <a className="nav-link" href="/#">
                                Desafio
                            </a>
                            <a className="nav-link" href="/#">
                                Premiação
                            </a>
                            <a className="nav-link" href="/#">
                                Marketing
                            </a>
                            <a className="nav-link" href="/#">
                                Regulamento
                            </a>
                            <a className="nav-link" href="/#">
                                F.A.Q.
                            </a>
                            <a className="nav-link" href="/#">
                                Formulário de inscrição
                            </a>
                        </div>
                    </div>
                </div>
                <div className="event-container">
                    <h1>{match.params.id}</h1>
                </div>
            </div>
        </Container>
    );
}

export default HackathonRoute;
