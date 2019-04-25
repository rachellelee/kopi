class Events {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        for (let x = 0; this.events[x]; x++) {
            if (this.events[x].time > event.time) {
                this.events.splice(x, 0, event);
                return;
            }
        }
        this.events.push(event);
    }

    handleNextEvents() {
        let now = (new Date()).getTime();
        let eventList = [];
        while (this.events.length > 0) {
            if (this.events[0].time <= now) {
                eventList.push(this.events.shift());
            } else {
                break;
            }
        }
        eventList.forEach(event => { event.handle() });
    }
}

export default Events;
