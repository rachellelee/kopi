class Events {
    constructor() {
        this.events = [];
    }

    addNextEvent(event) {
        this.events.push(event);
    }

    handleNextEvents() {
        let nextEvents = this.events;
        this.events = [];
        nextEvents.forEach(event => event.handle());
    }
}

export default Events
