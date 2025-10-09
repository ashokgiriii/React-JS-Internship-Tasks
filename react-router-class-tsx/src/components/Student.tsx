import { Link } from "react-router-dom";

const students = [
  { name: "Janak Pathak", email: "jab@gmail.com", sId: 1 },
  { name: "Pradip Pyakurel", email: "py@gmail.com", sId: 2 },
  { name: "Adam Giri", email: "adam@gmail.com", sId: 3 },
  { name: "Jack Lamechhane", email: "jack@gmail.com", sId: 4 },
];

const Student = () => {
  return (
    <div className="bg-gray-200 p-4 max-w-md mx-auto mt-10 rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Student List</h2>
      <ul className="space-y-3">
        {students.map((student) => (
          <li
            key={student.sId}
            className="bg-gray-600 text-white p-3 rounded text-center hover:bg-gray-700 transition"
          >
            <Link to={`/student/${student.sId}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
