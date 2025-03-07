
const allStudents = ["Stella", "Roy", "Alvin", "Caro", "Karo"];

function specificUser(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return allStudents[i]; // Return the matched name immediately
    }
  }
  return "Name not in the list"; // If no match is found
}

 
console.log(specificUser(allStudents, "Roy")); // Output: Roy



