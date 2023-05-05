import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the WDD Portal.</h1>
      <div className={styles.buttons}>
        <Link href="/ta">TA</Link>
        <Link href="/student">Student</Link>
      </div>
    </div>
  );
}
