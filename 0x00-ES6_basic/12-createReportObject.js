export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      let count = 0;
      for (const element in employeesList) {
        count += 1;
      }
      return count;
    },
  };
  return report;
}
