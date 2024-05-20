const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const main = async() => {
  try {
    let answer;

    answer = await askQuestion("Thank you for your valuable feedback. What's an activity you like doing? ");
    console.log(`Activity: ${answer}`);

    answer = await askQuestion("What do you listen to while doing that? ");
    console.log(`Listening to: ${answer}`);

    answer = await askQuestion("Which meal is your favorite (e.g., dinner, brunch, etc.)? ");
    console.log(`Favorite meal: ${answer}`);

    answer = await askQuestion("Which sport is your absolute favorite? ");
    console.log(`Favorite sport: ${answer}`);

    answer = await askQuestion("What is your superpower? In a few words, tell us what you are amazing at! ");
    console.log(`Superpower: ${answer}`);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
};

main();