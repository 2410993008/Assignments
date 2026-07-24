let students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

const output = document.getElementById("output");

function show(title, data) {
  const div = document.createElement("div");
  div.className = "task";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const pre = document.createElement("pre");
  pre.textContent = typeof data === "string" ? data : JSON.stringify(data, null, 2);
  div.appendChild(h2);
  div.appendChild(pre);
  output.appendChild(div);
  console.log(title);
  console.log(data);
}

students.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
show("Task 1 - Add a Student (push)", students);

const removedLast = students.pop();
show("Task 2 - Remove Last Student (pop)", removedLast);

students.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
show("Task 3 - Add Student at Beginning (unshift)", students);

const removedFirst = students.shift();
show("Task 4 - Remove First Student (shift)", removedFirst);

const indexToReplace = students.findIndex(s => s.id === 103);
students.splice(indexToReplace, 1, { id: 107, name: "Karan", marks: 78, course: "Java" });
show("Task 5 - Update Array Using splice()", students);

const firstThree = students.slice(0, 3);
show("Task 6 - Create a New Array Using slice()", firstThree);

let task7Result = "";
for (const student of students) {
  task7Result += `${student.name} - ${student.course} - ${student.marks}\n`;
}
show("Task 7 - Array Iteration (for...of)", task7Result.trim());

let task8Result = "";
students.forEach(student => {
  task8Result += student.name + "\n";
});
show("Task 8 - forEach()", task8Result.trim());

const names = students.map(student => student.name);
show("Task 9 - map()", names);

const highScorers = students.filter(student => student.marks >= 80);
show("Task 10 - filter()", highScorers);

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
show("Task 11 - reduce()", `Total Marks = ${totalMarks}\nAverage = ${averageMarks.toFixed(1)}`);

const ascending = [...students].sort((a, b) => a.marks - b.marks).map(s => s.marks);
const descending = [...students].sort((a, b) => b.marks - a.marks).map(s => s.marks);
show("Task 12 - sort()", `Ascending:\n${ascending.join("\n")}\n\nDescending:\n${descending.join("\n")}`);
