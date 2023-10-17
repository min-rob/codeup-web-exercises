const findLargestNumber = (arr) => {
  let ans = [];
  if (!Array.isArray(arr) && arr.length === 0) {
    return false;
  } else {
    ans = arr.reduce((total, arr) => Math.max(total, arr)) + 0;
  }
  return ans;
};

const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
const result = findLargestNumber(numbers);
console.log(result);

const newFindLargestNumber = (nums) => {
  let ans = nums[0];
  if (!Array.isArray(nums) && nums.length === 0) {
    return false;
  } else {
    for (let num of nums) {
      if (num > ans) {
        ans = num;
      }
    }
  }
  return ans;
};
const newNumbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
console.log("this", newFindLargestNumber(newNumbers));

/*
 *Question: You have an object called studentGrades that contains the grades of students in a class. Each key in the object is the student's name, and the value is an array of their test scores. Write a function called findTopStudents that takes the studentGrades object as input and returns an array of names of the students who have an average test score above 90. You will need to iterate through the object, calculate the average score for each student, and use a conditional statement to check if it's above 90.
 */
const studentGrades = {
  Alice: [92, 87, 95, 88, 91],
  Bob: [78, 89, 92, 86, 90],
  Charlie: [95, 97, 94, 89, 92],
  David: [87, 82, 79, 88, 91],
  Eve: [94, 91, 93, 96, 90],
};

const findTopStudents = (studentGrades) => {
  let topStudent = []; // establish an empty array to save the new key:value's that meet the conditions
  for (const student in studentGrades) {
    // using for..in loop we loop through the new variable called "students" in the obj studentGrades (param of func)
    const scores = studentGrades[student]; // each iteration is saving the array of values in to the variable "scores"
    console.log("scores are: ", scores);
    // the expected output is "scores are: [92, 87, 95, 88, 91], [78, 89, 92, 86, 90],..."
    const sum = scores.reduce((acc, currentScore) => acc + currentScore, 0); // here we are getting the sum of each array value from each student.
    console.log("the sum is: ", sum);
    // the expected output is "the sum is: 453, 435, 467, 427..."
    const averageScore = sum / scores.length; // getting the average from the sums, after finding the length of the scores.
    if (averageScore >= 90) {
      topStudent.push(student); // using the array.push method to push the arrays into the empty array of topStudent, we are pushing student which is the key's from the obj. We can also add averageScore that correlates to that key pair if we wanted to.
      //   return topStudent; we would only see 'Alice' here.
    }
  }
  return topStudent; // we want to return the topStudent OUTSIDE of the for loop or we would only see the latest iteration pushed if we returned inside.
};

console.log(findTopStudents(studentGrades));
