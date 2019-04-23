class Event {
    constructor(events, grid) {
        this.events = events;
        this.grid = grid;
    }

    handle() {
        // todo make custom error
        throw "Need to implement handle function in event";
    }
}

export default Event
