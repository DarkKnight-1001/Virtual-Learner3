/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which component typically determines the frequency of a non-sinusoidal oscillator?",  ///// Write the question inside double quotes
      answers: {
        a: "Transformer",                  ///// Write the option 1 inside double quotes
        b: "Resistor-Capacitor(RC) network",                  ///// Write the option 2 inside double quotes
        c: "Inductor",                  ///// Write the option 3 inside double quotes
        d: "Diode bridge"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "A bistable multivibrator can be used as:",  ///// Write the question inside double quotes
      answers: {
        a: "A waveform generator ",                  ///// Write the option 1 inside double quotes
        b: "A frequency multiplier",                  ///// Write the option 2 inside double quotes
        c: "A memory storage element (flip-flop)",                  ///// Write the option 3 inside double quotes
        d: "A power amplifier"                  ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question: "Which logic family can be used to implement a Schmitt trigger oscillator",  ///// Write the question inside double quotes
       answers: {
         a: "TTL",                  ///// Write the option 1 inside double quotes                  ///// Write the option 1 inside double quotes
         b: "CMOS ",                  ///// Write the option 2 inside double quotes
         c: "Both A and B",                  ///// Write the option 3 inside double quotes
         d: "NOne of the above"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     }, 
     {
      question: "The time period of oscillation in a non-sinusoidal RC oscillator depends on",  ///// Write the question inside double quotes
       answers: {
         a: "Supply Voltage",                  ///// Write the option 1 inside double quotes
         b: "RC time constan",                  ///// Write the option 2 inside double quotes
         c: "Load resistance",                  ///// Write the option 3 inside double quotes                  ///// Write the option 3 inside double quotes                  ///// Write the option 3 inside double quotes,                  ///// Write the option 3 inside double quotes
         d: "Output impedance"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },   
       {
      question: "Which of the following characteristics does a Schmitt trigger exhibit?",  ///// Write the question inside double quotes
       answers: {
         a: "Linear amplification",                  ///// Write the option 1 inside double quotes
         b: "Hysteresis",                  ///// Write the option 2 inside double quotes
         c: "Phase shift",                  ///// Write the option 3 inside double quotes
         d: "Logarithmic response"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },                           ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////