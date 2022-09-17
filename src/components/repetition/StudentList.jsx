import students from "../../data/students";
// eslint-disable-next-line
export default (props) => {
  const studentsLI = students.map((students) => {
    return (
      <li key={students.id}>
        {students.id}) {students.name} -> {students.grade}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsLI}</ul>
    </div>
  );
};
