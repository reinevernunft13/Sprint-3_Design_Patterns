## Singleton Pattern
The Singleton pattern (SP) is a creational design pattern. As such, it focuses on object creation mechanisms. The SP limits the instantiation of a class to a single object, while ensuring that it is globally accessible in the application. 

**Exercise**

Build a game app. Here are the rules: Various players can join the game. Points can be added to, or substracted from, each player. The players' scores will be stored on a scoreboard. The app must display each player's scores as well as the  winner. The scoreboard class must implement a singleton pattern. 

**Solution**

There are three classes, each created in a different module: Game.js, Player.js, Scoreboard.js. Each time, we create a game, a scoreboard will be created, too. This will store the game's information --that is: the players and their scores. 

**Instructions**

To test this app, run the following command:
````
node index.js
````


