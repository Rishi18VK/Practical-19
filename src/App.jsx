import { useState } from "react";
const initial = [
  { id: 1, name: "Aarav Shah", course: "BCA" },
  { id: 2, name: "Diya Patel", course: "BCA" },
  { id: 3, name: "Rohan Mehta", course: "BBA" },
  { id: 4, name: "Isha Desai", course: "B.Sc" },
];
export default function App() {
  const [students, setStudents] = useState(initial);
  const remove = (id) => setStudents(students.filter((s) => s.id !== id));
  return (
    <div className="app">
      <h1>Student Management (Delete)</h1>
      <div className="card">
        {students.length === 0 && <p>All students deleted.</p>}
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              <span>{s.name} ({s.course})</span>
              <button className="del" onClick={() => remove(s.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button className="alt" onClick={() => setStudents(initial)}>Reset List</button>
      </div>
    </div>
  );
}
