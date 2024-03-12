export default function getStudentIdsSum(array) {
  return array.reduce((adder, { id }) => adder + id, 0);
}
