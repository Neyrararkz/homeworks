//1
const user = {
  id: "u555",
  name: "Ali",
  age: 20,
  role: "student",
  isActive: true,
  settings: {
    theme: "dark",
    language: "ru",
  },
  courses: ["JS", "React", "Python"]
};

console.log("Id:", user.id);
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Role:", user.role);
console.log("Active:", user.isActive);
console.log("Theme:", user.settings.theme);
console.log("First course:", user.courses[0]);

//2
const attempt = {
  attemptId: "att-001",
  student: {
    id: "s100",
    name: "Aruzhan",
  },
  exam: {
    id: "exam-10",
    title: "JavaScript Basics",
  },
  answers: [
    { qid: 1, answer: "C", correct: true },
    { qid: 2, answer: "A", correct: false },
  ],
  score: 75,
  createdAt: new Date()
};

let correctCount = 0;
for (const answer of attempt.answers) {
  if (answer.correct === true) {
    correctCount++;
  }
}

console.log('Exam title:', attempt.exam.title)
console.log('Student name:', attempt.student.name)
console.log('Correct answers', correctCount)
console.log('Score:', attempt.score)



