import { CourseStaff } from "./components/courseStaff";

export default function App() {
  return (
    <div>
      <h2>Welcome to my first react app</h2>
      <div>
        <CourseStaff name="Dan" rating={100} title="Student" />
        <CourseStaff name="Something" rating={90} title="Teacher" />
        <CourseStaff name="Other" rating={80} title="Name" />
      </div>
    </div>
  );
}
