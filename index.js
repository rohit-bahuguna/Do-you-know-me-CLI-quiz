
const readlineSync = require('readline-sync');
const nextLine = '\n\n'
let score = 0;

const questions = [
  {
    askName: 'Hey may i know your name'
  },
  {
    firstquestion: 'what  is my name',
    ans: 'Rohit'
  },
  {
    secondQuestion: 'Where do i live',
    ans: 'nainital'
  },
  {
    thirdQuestion: "what is my dog's name",
    ans: 'tommy'
  },
  {
    fourthQuestion: "what is my fav color ",
    ans: 'black'
  },
  {
    lastQuestion: "what i love doing the most ",
    ans: 'coding'
  }

]

const getAns = (givenAns, realAns) => {
  if (givenAns === realAns) {
    score++;
    console.log(`Right answer well done , you got a point${nextLine}your score is ${score}${nextLine}`)
  } else {
    if (score !== 0) {
      score--;
    }
    console.log(`Wrong answer ${nextLine} your score is ${score}${nextLine}`)
  }

}

const askQuestion = (questions) => {
  const askName = readlineSync.question(`${questions[0].askName}?${nextLine}`);
  console.log('Hi ' + askName + "! let's play a game to see how much you know me");

  const tellMyName = readlineSync.question(`${questions[1].firstquestion}?${nextLine}`);
  getAns(tellMyName, questions[1].ans)

  const whereDoILive = readlineSync.question(`${questions[2].secondQuestion}?${nextLine}`);
  getAns(whereDoILive, questions[2].ans)

  const dogsName = readlineSync.question(`${questions[3].thirdQuestion}?${nextLine}`);
  getAns(dogsName, questions[3].ans)

  const favColor = readlineSync.question(`${questions[4].fourthQuestion}?${nextLine}`);
  getAns(favColor, questions[4].ans)


  const loveDoing = readlineSync.question(`${questions[5].lastQuestion}?${nextLine}`);
  getAns(loveDoing, questions[5].ans)

  console.log(`your final score is ${score}`)
}

askQuestion(questions)