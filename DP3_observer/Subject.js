const EventEmitter = require('events');

//CREATE CUSTOM EVENTEMITTER CLASS
class Subject extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.messageBoard = [];
        //this.users = [];   
    }

    addMessageToBoard(message, author) {
        console.log(
            `** A new message has been added to the thread "${this.name}" **`);
        console.log('--------------------------------------------------------------');
        this.messageBoard.push(message);
        this.emit("New Message", message, author);
        console.log('--------------------------------------------------------------');
    }
    subscribeUser(user) { 
        this.on("New Message", (message, author) => {
            user.update(message, author);
        });
    }
}

module.exports = Subject;