class CustomEvent {
    showEvent() {
        console.log("CustomEvent show");
    }

    addEvent(eventName) {
        return "CustomEvent " + eventName;
    }
}

module.exports = CustomEvent;