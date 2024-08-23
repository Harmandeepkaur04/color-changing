"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Game.module.css';
import Leaderboard from './leaderboard';
import About from './about';

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/game.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Shooter Game</h1>
      <canvas id="gameCanvas" className={styles.gameCanvas}></canvas>
      <div className={styles.controls}>
        <p>Use arrow keys to move, spacebar to shoot.</p>
      </div>
      <nav className={styles.nav}>
        <Link href='./leaderboard'>Leaderboard</Link>
        <Link href='./about'>About</Link>
      </nav>
    </div>
  );
};

export default HomePage;
