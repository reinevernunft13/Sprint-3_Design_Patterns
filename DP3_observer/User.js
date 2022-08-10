class User {
    constructor(name) {
        this.name = name
    }
  
    newMessage(subject, message) {
        subject.addMessageToBoard(message, this.name);
    }
  
    update(message, author) {
        console.log(
        `${this.name} received the following message: 
        ${message}
> Message sent by: ${author}.`);
    }
  
  }
  
  module.exports = User