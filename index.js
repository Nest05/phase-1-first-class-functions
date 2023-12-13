// You can do this but, it's tiresome
/*function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  */
//  So, we can pull the activities into their own function
 /*function runFiveMiles(){
    console.log('Go for a five-mile run');
 }
 function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

//   Monday gets shorter;
function Monday() {
  runFiveMiles();
  liftWeights();
}

//  Then, we can input a fuction that takes the 2nd activity as a parameter since it's a variable
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

// Then, try it on the Monday function
function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}



// This can be more concise using arrow fuction below
exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});
// More concise;
exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});
// or
exerciseRoutine(() => console.log("Stretch! Work that core!"));



// Determining what to have for breakfast
function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}
const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!
*/

function receivesAFunction(trialFun){
  trialFun();
}

function returnsANamedFunction(){
  return receivesAFunction;
}

function returnsAnAnonymousFunction(){
  return function(){};
}