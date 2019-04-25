class Event {
    constructor(events, grid) {
        if (this.constructor == Event) {
            throw new Error("Abstract classes can't be instantiated");
        }
        this.events = events;
        this.grid = grid;
        Event.prototype.time;
    }

    handle() {
        // todo make custom error
        throw "Need to implement handle function in event";
    }
}

export default Event
