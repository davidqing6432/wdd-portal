import Link from 'next/link';

export default function TA() {
  return (
    <div>
      <h1>TA</h1>
      <Link href="/ta/attendance">Attendance</Link>
      <Link href="/ta/grades">Grades</Link>
    </div>
  );
}
