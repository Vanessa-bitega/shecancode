const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me your name and I will tell you your fate: ", function(userName) {

  if (userName) {
    console.log(`Hello ${userName}!`);
  } else {
    console.log("Hello Stranger!");
  }

  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = randomNumber;

  if (eightBall === 0) {
    console.log("Something’s coming. Whatever you do, please don’t go to sleep.");
  } else if (eightBall === 1) {
    console.log("Today you will trip and lose a tooth, watch your step.");
  } else if (eightBall === 2) {
    console.log("A serial killer escaped from jail. Now that you have read this message, he will visit you at 3 a.m. with a chainsaw.");
  } else if (eightBall === 3) {
    console.log("Cannot predict now.");
  } else if (eightBall === 4) {
    console.log("You are being watched, stay alert!");
  } else if (eightBall === 5) {
    console.log("Your day will end in tears.");
  } else if (eightBall === 6) {
    console.log("It’s happening again, you might be the next victim.");
  } else if (eightBall === 7) {
    console.log("Someone will knock on your ceiling tonight. Don’t struggle. He will not like it if you struggle.");
  }

  rl.close();
});
