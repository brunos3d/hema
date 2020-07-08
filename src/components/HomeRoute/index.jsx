import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import moment from "../../store/moment";
import { getEvents } from "../../store/localData";

const HomeRoute = () => {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState(getEvents());

    useEffect(() => {
        const trimmedSearch = search.trim();
        const updatedEvents = getEvents();
        if (trimmedSearch.length > 0) {
            setEvents(
                updatedEvents.filter(
                    (event) =>
                        Object.values(event).filter(
                            (value) =>
                                value.toString().toUpperCase().includes(trimmedSearch.toUpperCase()) ||
                                value
                                    .toString()
                                    .replace(/[^\w\s]/gi, "")
                                    .toUpperCase()
                                    .includes(trimmedSearch.replace(/[^\w\s]/gi, "").toUpperCase()) ||
                                (moment(value.toString(), "YYYY-MM-DD").isValid() &&
                                    moment(value.toString(), "YYYY-MM-DD")
                                        .format("DDMMYYYYhhmmss")
                                        .toUpperCase()
                                        .includes(trimmedSearch.replace(/[^\w\s]/gi, "")))
                        ).length > 0
                )
            );
        } else {
            setEvents(updatedEvents);
        }
    }, [search]);

    return (
        <Container>
            <div className="search-container">
                <input
                    className="search"
                    type="text"
                    placeholder="Procure por nomes, tipos de hackas, datas e outras coisas..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Link className="btn-create-event" to="/hackathons/create">
                    Novo evento
                </Link>
            </div>
            <div className="events-container">
                {events &&
                    events.map((event, index) => (
                        <Link className="event-card" to={`/hackathons/${event.id}`} key={index}>
                            <img className="event-logo" src={`${process.env.PUBLIC_URL}/img/${event.imgUrl || "MEGA-HACK.png"}`} alt="event-logo" />
                            <h1>{event.name}</h1>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <span>Início: {moment(event.startDate).format("DD/MM")}</span>
                                <span style={{ marginLeft: "10px" }}>Término: {moment(event.endDate).format("DD/MM")}</span>
                            </div>
                        </Link>
                    ))}
            </div>
        </Container>
    );
};

export default HomeRoute;
