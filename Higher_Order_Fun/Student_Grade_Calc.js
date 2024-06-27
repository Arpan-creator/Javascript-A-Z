
// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
  ];

  function sum(scores){
    return scores.reduce((accu,score) =>accu+score,0)
  }
  function calculateFinalGrades(students){
    const passed=students.filter(students =>sum(students.scores)/students.scores.length>=70);
    return passed;
  }
  
  // Output
  const passedStudents = calculateFinalGrades(students);
  console.log(passedStudents);
  // Output should be:
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]
  
  