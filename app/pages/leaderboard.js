import React from 'react';
import Link from 'next/link';
import styles from '../styles/Leaderboard.module.css';

const Leaderboard = () => {
  // Sample data, this should come from a backend or database
  const scores = [
    { name: 'Player1', score: 150 },
    { name: 'Player2', score: 120 },
    { name: 'Player3', score: 100 },
  ];

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <ul className={styles.list}>
        {scores.map((score, index) => (
          <li className={styles.listItem} key={index}>
            {`${score.name}: ${score.score}`}
          </li>
        ))}
      </ul>
      <nav className={styles.nav}>
        <Link href="./">Back to Game</Link>
        <Link href="./about">About</Link>
      </nav>
    </div>
  );
};

export default Leaderboard;
