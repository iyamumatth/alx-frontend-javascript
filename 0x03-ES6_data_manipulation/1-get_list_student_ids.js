export default function getListStudentIds(studentArray) {
  /* eslint-disable */
  if (!Array.isArray(studentIdArray)) {
    return [];
  }
  return studentIdArray.map((item) => item.id);
}
