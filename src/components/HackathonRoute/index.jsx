import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import moment from "../../store/moment";
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
                            <Link className="nav-link" to="#info">
                                Informações básicas
                            </Link>
                            <Link className="nav-link" to="#deliverable">
                                Entregáveis
                            </Link>
                            <Link className="nav-link" to="#roles">
                                Habilidades
                            </Link>
                            <Link className="nav-link" to="#schedule">
                                Programação
                            </Link>
                            <Link className="nav-link" to="#planning">
                                Planejamento de divulgação
                            </Link>
                            <Link className="nav-link" to="#">
                                Critérios de avaliação
                            </Link>
                            <Link className="nav-link" to="#">
                                Desafio
                            </Link>
                            <Link className="nav-link" to="#">
                                Premiação
                            </Link>
                            <Link className="nav-link" to="#">
                                Marketing
                            </Link>
                            <Link className="nav-link" to="#">
                                Regulamento
                            </Link>
                            <Link className="nav-link" to="#">
                                F.A.Q.
                            </Link>
                            <Link className="nav-link" to="#">
                                Formulário de inscrição
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="event-container">
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        <div className="col" style={{ margin: "50px 30px 30px 50px" }}>
                            <span className="fact-title">Fact Check</span>
                        </div>
                        <div className="col" style={{ justifyContent: "center", marginRight: "30px" }}>
                            <Link className="btn-edit" to="/">
                                Editar
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card-section" id="info">
                            <h1>Informações básicas</h1>
                            <h2>
                                {targetEvent.name}
                                <span className="event-type-badge">{targetEvent.eventType}</span>
                            </h2>
                            <div className="row">
                                <div className="col" style={{ flex: 1 }}>
                                    <span className="info-label">
                                        Início das inscrições: <span className="info-value">{moment(targetEvent.startSubDate).format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Início do hacakthon: <span className="info-value">{moment(targetEvent.startDate).format("LLL")}</span>
                                    </span>
                                </div>
                                <div className="col" style={{ flex: 1 }}>
                                    <span className="info-label">
                                        Encerramento das inscrições:{" "}
                                        <span className="info-value">{moment(targetEvent.endSubDate).format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Encerramento do hacakthon: <span className="info-value">{moment(targetEvent.endDate).format("LLL")}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                {targetEvent.useRankPoints && (
                                    <span className="info-label">
                                        Quantidade mínima de pontos no Mega Rank: <span className="info-value">{targetEvent.minRankPoints}</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col" style={{ flex: 1 }}>
                            <div className="card-section" id="deliverable">
                                <h1>Entregáveis</h1>
                                <div className="col">
                                    <span className="info-label">Video Pitch</span>
                                    <span className="info-label">Video Demo</span>
                                    <span className="info-label">Apresentação</span>
                                    <span className="info-label">Link público do repositório</span>
                                    <span className="info-label">Pontua no Mega Rank</span>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ flex: 1 }}>
                            <div className="card-section" id="roles">
                                <h1>Habilidades</h1>
                                <div className="col">
                                    <span className="info-label">Desenvolvedor</span>
                                    <span className="info-label">UX / Designer</span>
                                    <span className="info-label">Negócio / Marketing</span>
                                    <span className="info-label">Especialista do tema</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col" style={{ flex: 1 }}>
                            <div className="card-section" id="schedule">
                                <h1>Programação</h1>
                                <div className="col">
                                    <span className="info-label">Live de aquecimento 1:</span>
                                    <span className="info-label">Live de aquecimento 2:</span>
                                    <span className="info-label">Abertura do hackathon:</span>
                                    <span className="info-label">Início de mentoria:</span>
                                    <span className="info-label">Submissão de projetos:</span>
                                    <span className="info-label">Período de avaliação:</span>
                                    <span className="info-label">Divulgação dos projetos:</span>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ flex: 1 }}>
                            <div className="card-section" id="planning">
                                <h1>Planejamento de divulgação</h1>
                                <div className="col">
                                    <span className="info-label">Abertura:</span>
                                    <span className="info-label">Reforço inscrição:</span>
                                    <span className="info-label">Reforço desafio:</span>
                                    <span className="info-label">Premiação:</span>
                                    <span className="info-label">Encerramento:</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HackathonRoute;
