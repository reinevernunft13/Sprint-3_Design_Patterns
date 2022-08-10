### Observer

The Observer pattern (OP) is a behavioral design pattern -- i.e. it is concerned with the communication of objects. The OP defines a one-to-many dependency between objects, so that one object -- called 'subject' -- notifies -- and automatically updates -- a set of observers (or listeners) when a change in its state occurs. 

## Exercise

Write an application that creates different User objects. The application will be able to create different Themes and subscribe users to them. When a User adds a message to a Topic, a console alert will be sent from the Topic. Each of the Users who are subscribed to the Theme will also display it by console (they will receive the message). Create a Theme with one User and one with two and show the reception of messages by users. Use the events module.

## Instructions

To execute the program, run the following command: 

`````
node app.js
``````
