var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var grade_A = 0;
var grade_B = 0;
var grade_C = 0;
var grade_D = 0;
var grade_F = 0;
// Make array of grades?

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
for (var i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    grade_A++;
  } else if (scores[i] > 80) {
    grade_B++;
  } else if (scores[i] > 70) {
    grade_C++;
  } else if (scores[i] > 60) {
    grade_D++;
  } else {
    grade_F++;
  }
}

// Use console.log to output the following criteria:
  // How many of each grade?
  // What is the lowest grade?
  // What is the highest grade?