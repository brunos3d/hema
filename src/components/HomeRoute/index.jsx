import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/pt-br";
import { Container } from "./styles";

import { getEvents } from "../../store/localData";

const HomeRoute = () => {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState(getEvents());

    useEffect(() => {
        const trimmedSearch = search.trim();
        if (trimmedSearch.length > 0) {
            setEvents((events) => events.filter((event) => event.name.toUpperCase().includes(trimmedSearch.toUpperCase())));
        } else {
            setEvents(getEvents());
        }
    }, [search]);

    return (
        <Container>
            <div className="search-container">
                <input className="search" type="text" placeholder="Pesquisar..." value={search} onChange={(event) => setSearch(event.target.value)} />
                <Link className="btn-create-event" to="/hackathon/create">
                    Novo evento
                </Link>
            </div>
            <div className="events-container">
                {events &&
                    events.map((event, index) => (
                        <div className="event-card" key={index}>
                            <img className="event-logo" src={`./img/${event.imgUrl || "MEGA-HACK.png"}`} alt="event-logo" />
                            <h1>{event.name}</h1>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <span>Início: {moment(event.startDate).fromNow()}</span>
                                <span style={{ marginLeft: "10px" }}>Término: {moment(event.endDate).fromNow()}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </Container>
    );
};

export default HomeRoute;
