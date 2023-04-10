// hijs.initHighlightOnload();
const questionsArr = [
  {
    question: 'What is the result of logical or relational expression in C',
    a: '0 if an expression is false and any positive number if an expression is true.',
    b: 'True or False',
    c: '0 or 1',
    d: 'None of the mentioned',
    answer: 'c',
  },
  {
    question: 'What data type is used to declare a whole number?',
    a: 'int',
    b: 'float',
    c: 'char',
    d: 'double',
    answer: 'a',
  },
  {
    question: 'A data type used to declare a decimal number?',
    a: 'int',
    b: 'float',
    c: 'char',
    d: 'long int',
    answer: 'b',
  },
  {
    question: 'It is used to store multiple values in a single variable.',
    a: 'array',
    b: 'char',
    c: 'float',
    d: 'double',
    answer: 'a',
  },
  {
    question: 'All keywords in C are in _____',
    a: 'LowerCase letters',
    b: 'UpperCase letters',
    c: 'CamelCase letters',
    d: 'None of the mentioned',
    answer: 'a',
  },
];

/// containers /////
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.container2');
const exitFirst = document.querySelector('.exit_first');
exitFirst.style.display = 'none';

const resultDiv = document.querySelector('.result_div');
const resultH1 = document.querySelector('.result_h1');

/// For question and choice elements ////
const question = document.getElementById('question');
const answers = document.querySelectorAll('.choice');

//// For choices selection elements text ////
const choiceA = document.getElementById('answerA');
const choiceB = document.getElementById('answerB');
const choiceC = document.getElementById('answerC');
const choiceD = document.getElementById('answerD');

// timer.innerHTML = 'test';

/// setInterval native JS function for an event every so often ////
// in this giving 1000 is 1000 millisecond ////////

// let interval = setInterval(countDown, 100);

// function countDown() {
//   const minutesTime = Math.floor(timeCount / 60);
//   let secondsTime = timeCount % 60;

//   secondsTime = secondsTime < 10 ? '0' + secondsTime : secondsTime;
//   timer.innerHTML = `0${minutesTime}:${secondsTime}`;

//   if (timerIndex === minStart * 60) {
//     clearInterval(interval);

//     // resultOne.classList.remove('hidden');
//     // resultOne.innerHTML = `Your time is up! Your Score is: ${score}/${overALL}`;
//     // timer.style.display = 'none';

//     // index = 0;
//   }
//   timerIndex++;
//   timeCount--;
// }

// NOTE:: **if given time continue (problem). always read this before starting.
// NOTE:: 1.fix time function implementation.(problem)
// NOTE:: 2.wont update scores when time hits 0.(problem)
// NOTE:: 3.exit function and update score status.(problem)
// NOTE:: 4.make calculate average function.(problem)
// NOTE:: 5.update question for next round.(problem)
// NOTE:: 6.use template literals if possible if not try imgsrc.(problem)
// NOTE:: 7.above list ^^^ still to be implemented and updated(problem)
// NOTE:: 8.find whats causing issue's on some functions.
// NOTE:: 9.follow notes to trace args and funcs.
// NOTE:: 10.make code efficient and readable for self review.
// NOTE:: 11.never remove comments!!! for documentation and self repo.
// NOTE:: 12.update solved problems and new problems on this note.

/////// NOTE:: RESULTS//////
const resultOne = document.querySelector('.resultOne');
const counterInfo = document.querySelector('.counterInfo');

//// NOTE:: BTN /////
const startBtn = document.querySelector('.start');
const exitBtn = document.querySelector('.exit');

//// next prev btn ////
const next = document.querySelector('.next');
const submit = document.querySelector('.submit');

const next3 = document.querySelector('.next3');
next3.style.display = 'none';

const codeThree1 = document.getElementById('code3_1');
codeThree1.style.display = 'none';

const nextRound = document.querySelector('.nextround_btn');
nextRound.style.display = 'none';
const nextRound3 = document.querySelector('.nextround_btn3');
nextRound3.style.display = 'none';
const codeWrap = document.querySelector('.codeWrap');
codeWrap.style.display = 'none';

const exitResult = document.querySelector('.exit_result');
// const prev = document.querySelector('.prev');
////func////
// function hidePrev() {
//   prev.style.display = 'none';
// }
// function showPrev() {
//   prev.style.display = '';
// }
// function hideNext() {
//   prev.style.display = 'none';
// }
// function showNext() {
//   prev.style.display = '';
// }

//// NOTE:: Start algs ////
startBtn.addEventListener('click', () => {
  containerTwo.style.display = 'none';
  submit.style.display = 'none';

  // hidePrev();
  container.classList.remove('hidden');
  counterInfo.innerHTML = `Question ${questionIndex + 1} out of 5`;
  startTimer();
  loadQuizOne();
});

let infoCount = 1;

let hideShowCounter = 0;

let score = 0;
let overALL = 0;

let questionIndex = 0;

resultDiv.style.display = 'none';

function loadQuizOne() {
  unChecked();

  const currentQuiz = questionsArr[questionIndex];
  question.innerHTML = currentQuiz.question;
  choiceA.innerHTML = currentQuiz.a;
  choiceB.innerHTML = currentQuiz.b;
  choiceC.innerHTML = currentQuiz.c;
  choiceD.innerHTML = currentQuiz.d;
}

function unChecked() {
  answers.forEach((answers) => (answers.checked = false));
}

function selectChecked() {
  let answer;
  answers.forEach((answers) => {
    if (answers.checked) {
      answer = answers.value;
    }
  });
  return answer;
}

const next2 = document.querySelector('.next2');
next2.style.display = 'none';

////event////
next.addEventListener('click', () => {
  const choice = selectChecked();
  infoCount++;
  counterInfo.innerHTML = `Question ${infoCount} out of 5`;

  let radioSelected = false;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    document.querySelector(
      '.radio_selected'
    ).innerHTML = `Please select an answer!`;
  } else {
    document.querySelector('.radio_selected').innerHTML = '';
  }

  if (choice) {
    if (choice === questionsArr[questionIndex].answer) {
      score++;
      overALL++;
    } else {
      overALL++;
    }

    questionIndex++;

    if (questionIndex === questionsArr.length - 1) {
      next.innerHTML = `Submit`;
      infoCount--;
    }
    if (questionIndex < questionsArr.length) {
      loadQuizOne();
    } else {
      clearInterval(timerNan);
      // resultOne.innerHTML = `Your Score is: ${score}/${overALL}`;
      printResult(score, overALL);
      timer.style.display = 'none';
      next.style.display = 'none';
      nextRound.style.display = '';
      resultDiv.style.display = '';
      resultOne.classList.remove('hidden');
      questionIndex = 0;
    }
  }
});

/////// timer ////////////////////////////////////////////

let timerIndex = 0;
let minStart = 2;
let timeCount = minStart * 60;

const timer = document.querySelector('.timer');

function incrementCount() {
  timerIndex++;
  // if (count === 10) {
  //   clearInterval(intervalID);
  // }
  return timerIndex;
}

let timerNan = null;
function startTimer() {
  timer.innerHTML = `TIME: 0${timeCount / 60}:00`;
  // timerIndex;
  timerNan = setInterval(() => {
    timeCount--;
    // timerIndex++;
    const test1 = incrementCount();

    const minutesTime = Math.floor(timeCount / 60);
    let secondsTime = timeCount % 60;
    secondsTime = secondsTime < 10 ? '0' + secondsTime : secondsTime;
    timer.innerHTML = `TIME: 0${minutesTime}:${secondsTime}`;

    if (test1 === minStart * 60) {
      clearInterval(timerNan);

      printResult(score, overALL);
      timer.style.display = 'none';
      next.style.display = 'none';
      resultDiv.style.display = '';
      nextRound.style.display = '';
      // nextRound3.style.display = '';
      resultOne.classList.remove('hidden');
      resultH1.innerHTML = `Your Score Is ${score} out of 5`;
      questionIndex = 0;
    }
  }, 1000);
}

const questionsArrTwo = [
  {
    question:
      'Which among the following is NOT a logical or relational operator?',
    a: '||',
    b: '!=',
    c: '=',
    d: '==',
    answer: 'c',
  },
  {
    question: 'scanf() is a predefined function in______header file.',
    a: 'stdlib.h',
    b: 'ctype.h',
    c: 'stdio.h',
    d: 'stdarg.h',
    answer: 'c',
  },
  {
    question:
      'What are the elements present in the array of the following C code? <span style="background-color: rgb(167, 164, 164);"><span style="color: #181212;" >int array[5] = {5};</span></span>',

    a: '5, 5, 5, 5, 5',
    b: '5, 0, 0, 0, 0',
    c: '5, (garbage), (garbage), (garbage), (garbage)',
    d: '(garbage), (garbage), (garbage), (garbage), 5',
    answer: 'b',
  },
  {
    question:
      'Operation <span style="color: red"> "a = a * b + a"</span> can also be written as_____',
    a: 'a = (b+1) * a;',
    b: 'a *= b + 1;',
    c: 'c = a * b; a += c;',
    d: 'All of the mentioned',
    answer: 'd',
  },
  {
    question: 'What will be the final value of x in the following C code?',
    code: '',
    a: '3.75',
    b: 'Depends on compiler',
    c: '24',
    d: '3',
    answer: 'c',
  },
];

/////// timer2 ////////////////////////////////////////////

let timerIndex2 = 0;
let minStart2 = 2;
let timeCount2 = minStart2 * 60;

const timer2 = document.querySelector('.timer2');

function incrementCount2() {
  timerIndex2++;

  return timerIndex2;
}

let timerNan2 = null;
function startTimer2() {
  timer2.innerHTML = `TIME: 0${timeCount2 / 60}:00`;

  timerNan2 = setInterval(() => {
    timeCount2--;
    // timerIndex2++;
    const test2 = incrementCount2();

    const minutesTime2 = Math.floor(timeCount2 / 60);
    let secondsTime2 = timeCount2 % 60;
    secondsTime2 = secondsTime2 < 10 ? '0' + secondsTime2 : secondsTime2;
    timer2.innerHTML = `TIME: 0${minutesTime2}:${secondsTime2}`;

    if (test2 === minStart2 * 60) {
      clearInterval(timerNan2);

      printResult(score2, overAll2);
      timer2.style.display = 'none';
      timer.style.display = 'none';
      next.style.display = 'none';
      resultDiv.style.display = '';
      nextRound.style.display = 'none';
      nextRound3.style.display = '';
      codeThree1.style.display = '';
      resultOne.classList.remove('hidden');
      resultH1.innerHTML = `Your Score Is ${score2} out of 5`;
      codeTwo5.style.display = 'none';
      codeWrap.style.display = '';

      questionIndex = 0;
    }
  }, 1000);
}

const codeTwo5 = document.getElementById('code2_5');
codeTwo5.style.display = 'none';

function printResult(a, b) {
  resultH1.innerHTML = `Your Score Is ${a} out of ${b}`;
  submit.style.display = '';
  container.style.display = 'none';
  nextRound.innerHTML = 'Next Round';
}
function loadQuizTwo() {
  unChecked();
  const currentQuiz2 = questionsArrTwo[questionIndex];
  question.innerHTML = currentQuiz2.question;
  codeTwo5.style.display = currentQuiz2.code;
  choiceA.innerHTML = currentQuiz2.a;
  choiceB.innerHTML = currentQuiz2.b;
  choiceC.innerHTML = currentQuiz2.c;
  choiceD.innerHTML = currentQuiz2.d;
}
let choice2 = selectChecked();

let score2 = 0;
let overAll2 = 0;

////next1
nextRound.addEventListener('click', () => {
  startTimer2();
  loadQuizTwo();
  resultOne.classList.add('hidden');
  timer2.style.display = '';
  timer.style.display = 'none';
  next.style.display = 'none';

  resultH1.innerHTML = '';
  infoCount = 1;
  submit.style.display = 'none';
  resultDiv.style.display = 'none';

  container.style.display = '';
  container.classList.remove('hidden');

  next2.style.display = '';
  counterInfo.innerHTML = `Question ${infoCount} out of 5`;
  next.style.display = 'none';
});
/////next 2
next2.addEventListener('click', () => {
  const choice = selectChecked();
  infoCount++;
  counterInfo.innerHTML = `Question ${infoCount} out of 5`;

  let radioSelected = false;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    document.querySelector(
      '.radio_selected'
    ).innerHTML = `Please select an answer!`;
  } else {
    document.querySelector('.radio_selected').innerHTML = '';
  }

  if (choice) {
    if (choice === questionsArrTwo[questionIndex].answer) {
      score2++;
      overAll2++;
    } else {
      overAll2++;
      codeTwo5.style.display = 'none';
    }

    questionIndex++;

    if (questionIndex === questionsArrTwo.length - 1) {
      next2.innerHTML = `Submit`;
      infoCount--;
    }
    if (questionIndex < questionsArrTwo.length) {
      loadQuizTwo();
    } else {
      clearInterval(timerNan2);
      // resultOne.innerHTML = `Your Score is: ${score}/${overALL}`;
      printResult(score2, overAll2);
      timer.style.display = 'none';
      next.style.display = 'none';
      resultDiv.style.display = '';
      nextRound.style.display = 'none';
      resultOne.classList.remove('hidden');
      nextRound3.style.display = '';
      codeThree1.style.display = '';
      codeTwo5.style.display = 'none';
      codeThree1.style.direction = '';
      codeWrap.style.display = '';

      questionIndex = 0;
    }
  }
});

/////////code
const questionsArrThree = [
  {
    question: 'What will happen if the following C code is executed?',
    a: 'It will cause a compile-time error',
    b: 'It will cause a run-time error',
    c: 'It will run with compile-time error and prints 3',
    d: 'It will run without any error and prints 3',
    answer: 'd',
  },
  {
    question: 'What will be the output of the following C code?',
    a: 'Compile time error',
    b: 'Hello World! 34',
    c: 'Hello World! 1000',
    d: 'Hello World! followed by a junk value',
    answer: 'a',
  },
  {
    question: 'What is the expected output when this code is executed?',
    a: '(8,-14)',
    b: '(-4, -8)',
    c: '(8, -4)',
    d: '(-8, 4)',
    answer: 'c',
  },
  {
    question:
      'What is the result when this code is executed?<br>(Initial values: x= 7, y = 8)',
    a: '7.000000, 7',
    b: 'Run time error',
    c: '7.000000, junk',
    d: 'Varies',
    answer: 'c',
  },
  {
    question: 'What will be the output of the following C code?',
    a: 'In while loop 2',
    b: 'In while loop in while loop 3',
    c: 'In while loop 3',
    d: 'Infinite loop',
  },
];

const snippet1 = `
#include &lt;stdio.h&gt;
int main()
{
  int main = 3;
  printf("%d", main);
  return 0;
}`;
const snippet2 = `#include <stdio.h>
int main()
  {
    int y = 10000;
    int y = 34;
    printf("Hello World! %d\\n", y);
    return 0;
  }`;
const snippet3 = `#include <stdio.h>
int main()
  {
    int a, b;
    a = (2+3) * 4 - 6;
    b = 2+3 * (4 - 6);
    printf("\\n(%d, %d)"), a, b);
    return 0;
  }`;
const snippet4 = `#include <stdio.h>
void main()
  {
    float x;
    int y;
    printf("enter two numbers \\n");
    scanf("%f %f", &x, &y);
    printf("%f, %d", x, y);
  }`;

const snippet5 = `#include <stdio.h>
int main()
  {
    int i = 0;
    do
    {
        i++;
        if (i == 2)
            continue;
            printf("In while loop ");
    } while (i < 2);
    printf("%d\\n", i);
  }`;

const codeArray = [];
codeArray.push(snippet1);
codeArray.push(snippet2);
codeArray.push(snippet3);
codeArray.push(snippet4);
codeArray.push(snippet5);
const codeArea = document.querySelector('.codeArea');

// nextRound3.style.display = 'none';

/////////////ROUND 3

////timer

let timerIndex3 = 0;
let minStart3 = 2;
let timeCount3 = minStart3 * 60;

const timer3 = document.querySelector('.timer2');

function incrementCount3() {
  timerIndex3++;

  return timerIndex3;
}

let timerNan3 = null;
function startTimer3() {
  timer2.innerHTML = `TIME: 0${timeCount3 / 60}:00`;

  timerNan2 = setInterval(() => {
    timeCount3--;
    // timerIndex2++;
    const test3 = incrementCount3();

    const minutesTime3 = Math.floor(timeCount3 / 60);
    let secondsTime3 = timeCount3 % 60;
    secondsTime3 = secondsTime3 < 10 ? '0' + secondsTime3 : secondsTime3;
    timer2.innerHTML = `TIME: 0${minutesTime3}:${secondsTime3}`;

    if (test3 === minStart3 * 60) {
      clearInterval(timerNan2);

      printResult(score3, overAll3);
      timer2.style.display = 'none';
      timer.style.display = 'none';
      next.style.display = 'none';
      resultDiv.style.display = '';
      nextRound.style.display = 'none';
      nextRound3.style.display = 'none';
      codeThree1.style.display = '';
      resultOne.classList.remove('hidden');
      resultH1.innerHTML = `Your Score Is ${score2} out of 5`;
      codeTwo5.style.display = 'none';
      codeWrap.style.display = 'none';
      exitResult.style.display = 'none';
      exitFirst.style.display = '';
      questionIndex = 0;
    }
  }, 1000);
}

//////

function printResult(a, b) {
  resultH1.innerHTML = `Your Score Is ${a} out of ${b}`;
  submit.style.display = '';
  container.style.display = 'none';
  nextRound.innerHTML = 'Next Round';
}

function loadQuizThree() {
  unChecked();
  const currentQuiz3 = questionsArrThree[questionIndex];
  question.innerHTML = currentQuiz3.question;

  // codeTwo5.style.display = currentQuiz3.code;
  // codeThree1.style.display = currentQuiz3.code;
  codeArea.innerHTML = codeArray[questionIndex];
  choiceA.innerHTML = currentQuiz3.a;
  choiceB.innerHTML = currentQuiz3.b;
  choiceC.innerHTML = currentQuiz3.c;
  choiceD.innerHTML = currentQuiz3.d;
}
let choice3 = selectChecked();

let score3 = 0;
let overAll3 = 0;

///////

nextRound3.addEventListener('click', () => {
  startTimer3();

  loadQuizThree();
  nextRound3.style.display = 'none';
  resultOne.classList.add('hidden');
  // codeThree1.style.display = '';
  timer2.style.display = '';
  timer.style.display = 'none';
  next.style.display = 'none';

  resultH1.innerHTML = '';
  infoCount = 1;
  submit.style.display = 'none';
  resultDiv.style.display = 'none';

  container.style.display = '';
  // container.classList.remove('hidden');

  next3.style.display = '';
  counterInfo.innerHTML = `Question ${infoCount} out of 5`;
  next2.style.display = 'none';
  next.style.display = 'none';
});

//////

next3.addEventListener('click', () => {
  const choice = selectChecked();
  infoCount++;
  counterInfo.innerHTML = `Question ${infoCount} out of 5`;

  let radioSelected = false;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    document.querySelector(
      '.radio_selected'
    ).innerHTML = `Please select an answer!`;
  } else {
    document.querySelector('.radio_selected').innerHTML = '';
  }

  if (choice) {
    if (choice === questionsArrThree[questionIndex].answer) {
      score3++;
      overAll3++;
    } else {
      overAll3++;
    }

    questionIndex++;

    if (questionIndex === questionsArrThree.length - 1) {
      next2.innerHTML = `Submit`;
      infoCount--;
    }
    if (questionIndex < questionsArrThree.length) {
      loadQuizThree();
    } else {
      clearInterval(timerNan2);
      // resultOne.innerHTML = `Your Score is: ${score}/${overALL}`;
      printResult(score2, overAll2);
      timer.style.display = 'none';
      next.style.display = 'none';
      resultDiv.style.display = '';
      nextRound.style.display = 'none';
      nextRound3.style.display = 'none';
      exitResult.style.display = 'none';
      exitFirst.style.display = '';
      resultOne.classList.remove('hidden');
    }
  }
});
const exit = document.querySelector('.exit');

exit.addEventListener('click', () => {
  containerTwo.style.display = 'none';
  resultDiv.style.display = '';
  exitResult.style.display = 'none';
  resultH1.innerHTML =
    'Thank You! <br> Try again next time!<br><br><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Clown%20Face.png" alt="Clown Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Clown%20Face.png" alt="Clown Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Clown%20Face.png" alt="Clown Face" width="35" height="35" /> <br><br> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png" alt="Partying Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png" alt="Partying Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png" alt="Partying Face" width="35" height="35" />';
});

exitResult.addEventListener('click', () => {
  exitResult.style.display = 'none';
  nextRound.style.display = 'none';
  nextRound3.style.display = 'none';
  let totalScore = score + score2 + score3;
  let totalScoreAvg = ((score + score2 + score3) / 15) * 100;
  resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
  Round 2 score = ${score2} / 5<br>
  Round 3 score = ${score3} / 5<br>
  Total score ${totalScore} / 15 `;
  if (totalScoreAvg < 60) {
    resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
    Round 2 score = ${score2} / 5<br>
    Round 3 score = ${score3} / 5<br>
    Total score ${totalScore} / 15 (${totalScoreAvg.toFixed(2)}%)<br>
    FAILED! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" />`;
  } else {
    resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
    Round 2 score = ${score2} / 5<br>
    Round 3 score = ${score3} / 5<br>
    Total score ${totalScore} / 15 (${totalScoreAvg.toFixed(2)}%)<br>
    PASSED <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" />`;
  }
});

exitFirst.addEventListener('click', () => {
  exitFirst.style.display = 'none';
  exitResult.style.display = 'none';
  nextRound.style.display = 'none';
  nextRound3.style.display = 'none';
  let totalScore = score + score2 + score3;
  let totalScoreAvg = ((score + score2 + score3) / 15) * 100;
  resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
  Round 2 score = ${score2} / 5<br>
  Round 3 score = ${score3} / 5<br>
  Total score ${totalScore} / 15 `;
  if (totalScoreAvg < 60) {
    resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
    Round 2 score = ${score2} / 5<br>
    Round 3 score = ${score3} / 5<br>
    Total score ${totalScore} / 15 (${totalScoreAvg.toFixed(2)}%)<br>
    FAILED! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png" alt="Hot Face" width="35" height="35" />`;
  } else {
    resultH1.innerHTML = `Round 1 score = ${score} / 5<br>
    Round 2 score = ${score2} / 5<br>
    Round 3 score = ${score3} / 5<br>
    Total score ${totalScore} / 15 (${totalScoreAvg.toFixed(2)}%)<br>
    PASSED <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="35" height="35" />`;
  }
});
