const studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const NUMBER_OF_EXAMS = 4;
const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function letterGrade(grade) {
  if (grade >= 93) return '(A)';
  if (grade >= 85) return '(B)';
  if (grade >= 77) return '(C)';
  if (grade >= 69) return '(D)';
  if (grade >= 60) return '(E)';
  return '(F)';
}

function generateFinalGrade(scores, student) {
  const totalSum = (sum, value) => sum + value;

  const newScores = scores[student].scores;
  const examGrade = newScores.exams.reduce(totalSum) / NUMBER_OF_EXAMS;
  const exerciseGrade = newScores.exercises.reduce(totalSum);
  const finalNumberGrade = Math.round((examGrade * EXAM_WEIGHT)
        + (exerciseGrade * EXERCISE_WEIGHT));

  return `${finalNumberGrade} ${letterGrade(finalNumberGrade)}`;
}

function generateExamSummary(scores, students) {
  const amountOfStudents = students.length;
  const exams = [];

  for (let index = 0; index < NUMBER_OF_EXAMS; index += 1) {
    let total = 0;
    let min = Infinity;
    let max = -Infinity;

    students.forEach((student) => {
      const studentScore = scores[student].scores.exams[index];

      total += studentScore;
      if (studentScore >= max) max = studentScore;
      if (studentScore <= min) min = studentScore;
    });

    exams.push({
      average: total / amountOfStudents,
      minimum: min,
      maximum: max,
    });
  }
  return exams;
}

function generateGradesSummary(scores, students) {
  return students.map((student) => generateFinalGrade(scores, student));
}

function generateClassRecordSummary(scores) {
  const students = Object.keys(scores);

  const summary = {
    studentGrades: generateGradesSummary(scores, students),
    exams: generateExamSummary(scores, students),
  };
  return summary;
}

generateClassRecordSummary(studentScores);
