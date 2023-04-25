export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentIdArray)) {
    return [];
  }
  return studentIdArray.map((item) => item.id);
}
