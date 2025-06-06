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
      question: "Which of the following best describes a non-sinusoidal oscillator?",  ///// Write the question inside double quotes
      answers: {
        a: "An oscillator that produces only sine waves ",                  ///// Write the option 1 inside double quotes
        b: " An oscillator that produces exponentially decaying signals",                  ///// Write the option 2 inside double quotes
        c: "An oscillator that generates square, triangular, or sawtooth waveform",                  ///// Write the option 3 inside double quotes
        d: "An oscillator that uses transformers to amplify sine waves"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question:" What is the primary application of non-sinusoidal oscillators?",  ///// Write the question inside double quotes
      answers: {
        a: "AC power generation",                  ///// Write the option 1 inside double quotes
        b: "Signal filtering",                  ///// Write the option 2 inside double quotes
        c: "Timing and waveform generation in digital circuits",                  ///// Write the option 3 inside double quotes
        d: "Audio signal amplification"                   ///// Write the option 4 inside double quotes
                           ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },  
    {
      question:"In a Schmitt trigger circuit, hysteresis is used to",  ///// Write the question inside double quotes
      answers: {
        a: "Increase the frequency of oscillation",                  ///// Write the option 1 inside double quotes
        b: " Improve linearity",                  ///// Write the option 2 inside double quotes
        c: "Provide noise immunity and avoid multiple triggering",                  ///// Write the option 3 inside double quotes
        d:"Generate triangular waveforms"                   ///// Write the option 4 inside double quotes
                           ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
     {
      question:"Which component in an astable multivibrator primarily determines the time period of oscillation?",  ///// Write the question inside double quotes
      answers: {
        a: "Transistor gain",                  ///// Write the option 1 inside double quotes
        b: "Transformer winding ratio",                  ///// Write the option 2 inside double quotes
        c: "Resistors and capacitors",                  ///// Write the option 3 inside double quotes
        d:"Diodes"                   ///// Write the option 4 inside double quotes
                           ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
     {
      question:"A monostable multivibrator has:",  ///// Write the question inside double quotes
      answers: {
        a: "No stable states",                  ///// Write the option 1 inside double quotes
        b: " One stable state and one quasi-stable state",                  ///// Write the option 2 inside double quotes
        c: "Two stable states",                  ///// Write the option 3 inside double quotes
        d:"Only a quasi-stable state"                   ///// Write the option 4 inside double quotes
                           ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },  
     
   
      	
   
      	  
   
      	  
   
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