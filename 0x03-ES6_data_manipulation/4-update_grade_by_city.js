export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter(({ location }) => location === city)
    .map((obj) => {
      const targetGrade = grades.filter(
        ({ studentId }) => studentId === obj.id
      );
      const { grade = 'N/A' } = targetGrade.length > 0 ? targetGrade[0] : {};
      return { ...obj, grade };
    });
}
