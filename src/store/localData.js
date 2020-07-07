export function getEvents() {
    const localData = localStorage.getItem("events");

    if (localData) {
        const events = JSON.parse(localData);
        if (Array.isArray(events)) {
            return events;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function pushEvent(event) {
    localStorage.setItem("events", JSON.stringify([...getEvents(), event]));
}
