const defaultData = [
    {
        id: "x98asd98a",
        name: "Mega Hack 3.0",
        imgUrl: "MEGA-HACK.png",
        startSubDate: "2020-07-01",
        endSubDate: "2020-07-01",
        startDate: "2020-07-09",
        endDate: "2020-07-09",
        minRankPoints: "500",
        issuer: "",
        director: "",
        objective: "",
        minParticipantsTeam: "",
        award: ["", "", ""],
        eventType: "hackathon",
        useRankPoints: true,
        hasMinParticipantsTeam: false,
    },
    {
        id: "5s8f4e2q",
        name: "Hackathon Santander",
        imgUrl: "SANTANDER-DATA-CHALLENGE.png",
        startSubDate: "2020-07-09",
        endSubDate: "2020-07-16",
        startDate: "2020-07-17",
        endDate: "2020-07-24",
        minRankPoints: "500",
        issuer: "",
        director: "",
        objective: "",
        minParticipantsTeam: "",
        award: ["", "", ""],
        eventType: "hackathon",
        useRankPoints: false,
        hasMinParticipantsTeam: false,
    },
    {
        id: "8a6d9fd5e8",
        name: "Hacka TecBan",
        imgUrl: "TECBAN.png",
        startSubDate: "2020-07-18",
        endSubDate: "2020-07-31",
        startDate: "2020-07-30",
        endDate: "2020-08-13",
        minRankPoints: "200",
        issuer: "",
        director: "",
        objective: "",
        minParticipantsTeam: "",
        award: ["", "", ""],
        eventType: "ideathon",
        useRankPoints: true,
        hasMinParticipantsTeam: false,
    },
    {
        id: "a7s5f1q",
        name: "Desafio Eugene Challenge",
        imgUrl: "EUGENIO.png",
        startSubDate: "2020-07-11",
        endSubDate: "2020-07-15",
        startDate: "2020-07-23",
        endDate: "2020-07-27",
        minRankPoints: "200",
        issuer: "",
        director: "",
        objective: "",
        minParticipantsTeam: "",
        award: ["", "", ""],
        eventType: "datathon",
        useRankPoints: true,
        hasMinParticipantsTeam: false,
    },
    {
        id: "a6sv6w5q",
        name: "Hacka A Rocket",
        imgUrl: "HACK-A-ROCKET.png",
        startSubDate: "2020-07-11",
        endSubDate: "2020-07-15",
        startDate: "2020-07-23",
        endDate: "2020-07-27",
        minRankPoints: "200",
        issuer: "",
        director: "",
        objective: "",
        minParticipantsTeam: "",
        award: ["", "", ""],
        eventType: "datathon",
        useRankPoints: true,
        hasMinParticipantsTeam: false,
    },
];

export function getEvents() {
    const localData = localStorage.getItem("events");

    if (localData && localData.length > 0) {
        const events = JSON.parse(localData);
        if (Array.isArray(events)) {
            return events;
        } else {
            return defaultData;
        }
    } else {
        return defaultData;
    }
}

export function pushEvent(event) {
    localStorage.setItem("events", JSON.stringify([...getEvents(), event]));
}
