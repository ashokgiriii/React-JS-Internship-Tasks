import { useParams, useNavigate } from "react-router-dom";

const studentDetails = [
  {
    name: "Janak Pathak",
    email: "jab@gmail.com",
    sId: 1,
    rollNumber: 501,
    bio: "I am a student from abc",
  },
  {
    name: "Pradip Pyakurel",
    email: "py@gmail.com",
    sId: 2,
    rollNumber: 502,
    bio: "I am a student from sss",
  },
  {
    name: "Adam Giri",
    email: "adam@gmail.com",
    sId: 3,
    rollNumber: 503,
    bio: "I am a student from sos",
  },
  {
    name: "Jack Lamechhane",
    email: "jack@gmail.com",
    sId: 4,
    rollNumber: 504,
    bio: "I am a student from la",
  },
];

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentDetails.find((student) => student.sId === Number(id));

  if (!student) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-red-600">Student Not Found</h2>
        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => navigate("/student")}
        >
          Back to Student List
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded mt-10 w-[30%] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Student Details</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.rollNumber}
        </p>
        <p>
          <strong>Bio:</strong> {student.bio}
        </p>
      </div>
      <button
        className="mt-6 w-full cursor-pointer bg-gray-800 hover:bg-gray-900 text-white py-2 rounded"
        onClick={() => navigate("/student")}
      >
        Back to Student List
      </button>
    </div>
  );
};

export default StudentDetail;
