import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import moment from "../../store/moment";
import { getEvents } from "../../store/localData";

function HackathonRoute({ match }) {
    const targetEvent = getEvents().find((event) => event.id === match.params.id);

    targetEvent.startDate = moment(targetEvent.startDate);
    targetEvent.endDate = moment(targetEvent.endDate);
    targetEvent.startSubDate = moment(targetEvent.startSubDate);
    targetEvent.endSubDate = moment(targetEvent.endSubDate);

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
                            <a className="nav-link" href={`${match.url}#info`}>
                                Informações básicas
                            </a>
                            <a className="nav-link" href={`${match.url}#deliverable`}>
                                Entregáveis
                            </a>
                            <a className="nav-link" href={`${match.url}#roles`}>
                                Habilidades
                            </a>
                            <a className="nav-link" href={`${match.url}#schedule`}>
                                Programação
                            </a>
                            <a className="nav-link" href={`${match.url}#planning`}>
                                Planejamento de divulgação
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Critérios de avaliação
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Desafio
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Premiação
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Marketing
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Regulamento
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                F.A.Q.
                            </a>
                            <a className="nav-link" href={`${match.url}#`}>
                                Formulário de inscrição
                            </a>
                        </div>
                    </div>
                </div>
                <div className="event-container">
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        <div className="col" style={{ margin: "50px 30px 30px 50px" }}>
                            <span className="fact-title">Fact Check</span>
                        </div>
                        <div className="col" style={{ justifyContent: "center", marginRight: "30px" }}>
                            <div className="row">
                                <Link className="btn-faq" to={`${match.url}/faq`}>
                                    F.A.Q.
                                </Link>

                                <Link className="btn-edit" to="/" style={{ marginLeft: "20px" }}>
                                    Editar
                                </Link>
                            </div>
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
                                        Início das inscrições: <span className="info-value">{targetEvent.startSubDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Início do hacakthon: <span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
                                </div>
                                <div className="col" style={{ flex: 1 }}>
                                    <span className="info-label">
                                        Encerramento das inscrições: <span className="info-value">{targetEvent.endSubDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Encerramento do hacakthon: <span className="info-value">{targetEvent.endDate.format("LLL")}</span>
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
                                    <span className="info-label">
                                        Live de aquecimento 1:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate).subtract(2, "days").set({ hour: 19, minute: 30 }).format("LLL")}
                                        </span>
                                    </span>
                                    <span className="info-label">
                                        Live de aquecimento 2:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate).subtract(1, "days").set({ hour: 19, minute: 30 }).format("LLL")}
                                        </span>
                                    </span>
                                    <span className="info-label">
                                        Abertura do hackathon: <span className="info-value">{moment(targetEvent.endSubDate).format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Início de mentoria:{" "}
                                        <span className="info-value">{moment(targetEvent.startDate).add(18, "hours").format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Submissão de projetos:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate).endOf("isoWeek").set({ hour: 23, minute: 0 }).format("LLL")}
                                        </span>
                                    </span>
                                    <span className="info-label">
                                        Início do período de avaliação:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate)
                                                .endOf("isoWeek")
                                                .add(1, "days")
                                                .startOf("day")
                                                .set({ hour: 10, minute: 0 })
                                                .format("LLL")}
                                        </span>
                                    </span>
                                    <span className="info-label">
                                        Fim do período de avaliação:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate).endOf("isoWeek").add(2, "days").endOf("day").format("LLL")}
                                        </span>
                                    </span>
                                    <span className="info-label">
                                        Divulgação dos projetos:{" "}
                                        <span className="info-value">
                                            {moment(targetEvent.startDate).endOf("isoWeek").add(3, "days").set({ hour: 12, minute: 0 }).format("LLL")}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ flex: 1 }}>
                            <div className="card-section" id="planning">
                                <h1>Planejamento de divulgação</h1>
                                <div className="col">
                                    <span className="info-label">
                                        Abertura:<span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Reforço inscrição:<span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Reforço desafio:<span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Premiação:<span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
                                    <span className="info-label">
                                        Encerramento:<span className="info-value">{targetEvent.startDate.format("LLL")}</span>
                                    </span>
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
