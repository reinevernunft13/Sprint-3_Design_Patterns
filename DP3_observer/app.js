const User = require('./User.js');
const Subject = require('./Subject.js');

//CREATE USERS
const user1 = new User("Bec99");
const user2 = new User("VeganTraveler03");
const user3 = new User("Axel_NotRose");

//CREATE SUBJECTS 
const subject1 = new Subject("Travel hacks");
const subject2 = new Subject("Chicago Summer Events");

//SUBSCRIBE USERS TO SUBJECTS
subject1.subscribeUser(user1);
subject1.subscribeUser(user2);
subject2.subscribeUser(user3);

//SEND MESSAGES
user1.newMessage(subject1, "Hi! I'm planning on taking a trip this summer and was hoping someone could offer some tips on how to find cheap flights.");
user2.newMessage(subject1, "Have you tried browsing using a VPN?");
user3.newMessage(subject2, "Hi! I'm new to town. What Chicago activities do you recommend for newbies?");

