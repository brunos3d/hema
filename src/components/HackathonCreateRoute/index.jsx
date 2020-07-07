import React, { useRef, useState } from "react";
import { Form } from "@unform/web";

import { Container } from "./styles";

import { pushEvent } from "../../store/localData";

import Input from "../Input";
import Textarea from "../Textarea";

const HackathonCreateRoute = () => {
    const formRef = useRef(null);
    const [eventType, setEventType] = useState("hackathon");
    const [useRankPoints, setUseRankPoints] = useState(false);
    const [hasMinParticipantsTeam, setHasMinParticipantsTeam] = useState(false);

    function handleSubmit(data) {
        data.eventType = eventType;
        data.useRankPoints = useRankPoints;
        data.hasMinParticipantsTeam = hasMinParticipantsTeam;

        pushEvent(data);

        console.log(data);
    }

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <div id="info" style={{ marginTop: "50px" }}>
                    <h1>Informações básicas</h1>

                    <div className="input-section">
                        <Input className="input-text" name="name" type="text" placeholder="Nome do evento" />
                        <Input className="input-text" name="imgUrl" type="file" accept="image/png, image/jpeg" />
                    </div>

                    <div className="input-section">
                        <div className="row">
                            <button
                                className={"input-event-type" + (eventType === "hackathon" ? " active" : "")}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEventType("hackathon");
                                }}
                            >
                                Hackathon
                            </button>
                            <button
                                className={"input-event-type" + (eventType === "ideathon" ? " active" : "")}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEventType("ideathon");
                                }}
                                style={{ margin: "0 10px" }}
                            >
                                Ideathon
                            </button>
                            <button
                                className={"input-event-type" + (eventType === "datathon" ? " active" : "")}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEventType("datathon");
                                }}
                            >
                                Datathon
                            </button>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col" style={{ flex: 1 }}>
                                <span style={{ marginLeft: "10px" }}>Início das inscrições</span>
                                <Input className="input-text" name="startSubDate" type="date" />
                            </div>
                            <div className="col" style={{ flex: 1 }}>
                                <span style={{ marginLeft: "20px" }}>Encerramento das inscrições</span>
                                <Input className="input-text" name="endSubDate" type="date" style={{ marginLeft: "10px" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ flex: 1 }}>
                                <span style={{ marginLeft: "10px" }}>Início do hacakthon</span>
                                <Input className="input-text" name="startDate" type="date" />
                            </div>
                            <div className="col" style={{ flex: 1 }}>
                                <span style={{ marginLeft: "20px" }}>Encerramento do hacakthon</span>
                                <Input className="input-text" name="endDate" type="date" style={{ marginLeft: "10px" }} />
                            </div>
                        </div>

                        <h2 style={{ margin: "20px 0 0 10px" }}>Utiliza pontos do Mega Rank?</h2>
                        <div className="row" style={{ width: "50%", justifyContent: "space-between" }}>
                            <div className="row" style={{ margin: "22px 10px" }}>
                                <div className="input-radio">
                                    <label>
                                        <input type="checkbox" checked={useRankPoints} onChange={() => setUseRankPoints((old) => !old)} />
                                        Sim
                                    </label>
                                </div>

                                <div className="input-radio">
                                    <label>
                                        <input type="checkbox" checked={!useRankPoints} onChange={() => setUseRankPoints((old) => !old)} />
                                        Não
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <Input
                                    className="input-text"
                                    name="minRankPoints"
                                    type="number"
                                    placeholder={useRankPoints ? "Ex: 350" : undefined}
                                    disabled={!useRankPoints}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="regulation" style={{ marginTop: "50px" }}>
                    <h1>Regulamento</h1>
                    <div className="input-section">
                        <Input className="input-text" name="issuer" type="text" placeholder="Emitente" />
                        <Input className="input-text" name="director" type="text" placeholder="Realizadora" />
                        <Textarea className="input-text" name="objective" type="text" placeholder="Objetivo" />

                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <h2 style={{ margin: "15px 10px" }}>Limite de pessoas por time</h2>
                                    <Input className="input-text" name="director" type="number" placeholder="Ex: 5" />
                                </div>

                                <h2 style={{ margin: "20px 0 0 10px" }}>Tem quantidade minima de pessoas por time?</h2>
                                <div className="row" style={{ justifyContent: "space-between" }}>
                                    <div className="row" style={{ margin: "22px 10px" }}>
                                        <div className="input-radio">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={hasMinParticipantsTeam}
                                                    onChange={() => setHasMinParticipantsTeam((old) => !old)}
                                                />
                                                Sim
                                            </label>
                                        </div>

                                        <div className="input-radio">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={!hasMinParticipantsTeam}
                                                    onChange={() => setHasMinParticipantsTeam((old) => !old)}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <Input
                                            className="input-text"
                                            name="minParticipantsTeam"
                                            type="number"
                                            placeholder={hasMinParticipantsTeam ? "Ex: 3" : "1"}
                                            disabled={!hasMinParticipantsTeam}
                                        />
                                    </div>
                                </div>

                                <h2 style={{ margin: "20px 0 0 10px", fontWeight: "bold" }}>Premiação</h2>
                                <div className="row">
                                    <h2 style={{ margin: "20px 20px 0 10px" }}>1º Lugar</h2>
                                    <Input className="input-text" name="award[0]" type="text" />
                                </div>
                                <div className="row">
                                    <h2 style={{ margin: "20px 20px 0 10px" }}>2º Lugar</h2>
                                    <Input className="input-text" name="award[1]" type="text" />
                                </div>
                                <div className="row">
                                    <h2 style={{ margin: "20px 20px 0 10px" }}>3º Lugar</h2>
                                    <Input className="input-text" name="award[2]" type="text" />
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>

                <div className="input-section" style={{ alignItems: "flex-end" }}>
                    <button className="btn-create-hackathon" type="submit">
                        Publicar
                    </button>
                </div>
            </Form>
        </Container>
    );
};

export default HackathonCreateRoute;
