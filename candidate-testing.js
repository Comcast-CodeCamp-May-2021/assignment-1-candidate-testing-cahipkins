const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "What was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = [];//wrong candidate answers;
let candidateAnswers = [];//right candidate answers;
let questions = ["What was the first American woman in space? ", "True or False. 5000 meters == 5 kilometers? ", "(5+3)/2*10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
  candidateAnswer[i] = input.question(questions[i]);
  }
   
    
  }

function gradeQuiz(candidateAnswer) {
  // TODO 1.2c: use temperate literal that displays each of the candidate's responses in addition to the corresponding correct answers.
  
console.log(`Candidate Name: ${candidateName} 

1) ${questions[0]}
Your Answer: ${candidateAnswer[0]} 
Correct Answer: ${correctAnswers[0]}\n
2) ${questions[1]}
Your Answer: ${candidateAnswer[1]} 
Correct Answer: ${correctAnswers[1]}\n
3) ${questions[2]} 
Your Answer: ${candidateAnswer[2]}
Correct Answer: ${correctAnswers[2]}\n
4) ${questions[3]}
Your Answer: ${candidateAnswer[3]}
Correct Answer: ${correctAnswers[3]}\n
5) ${questions[4]}
Your Answer: ${candidateAnswer[4]}
Correct Answer: ${correctAnswers[4]}\n `);





 

 let numberOfCorrectAnswers = 0;
 let status ;


for ( i= 0; i < correctAnswers.length; i++) { 
if (candidateAnswer[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  numberOfCorrectAnswers +=1;



}
}

let grade = (numberOfCorrectAnswers/5)*100;

if (numberOfCorrectAnswers>=4){
  status = "PASSED" 
}else{
  status = "FAIL"
}


 
  
  
console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of 5 responses correct) <<<
>>> Status: ${status} <<<<< `);

  return grade;

}


function runProgram() {
  askForName();
  // TODO 1.H1c: Greet user using name just provided//
  console.log(`Hello ${candidateName}\n`);

  askQuestion();




  gradeQuiz(this.candidateAnswers);


}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram



};
