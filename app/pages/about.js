import React from'react';
import Link from'next/link';
import styles from'../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}><h1>About Shooter Game</h1><p>This is a simple shooter game built with React and Next.js.</p><nav className={styles.nav}><Link href="/">Back to Game</Link><Link href="./leaderboard">Leaderboard</Link></nav></div>
  );
};

export default About;
