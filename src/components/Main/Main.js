import React from 'react';
import './Main.css';
import { zodiac } from '../../data.js';
import ZodiacSign from '../ZodiacSign/ZodiacSign.js';
import background from '../../background.jpeg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <ZodiacSign key={sign.id} {...sign} />
      ))}
    </main>
  );
}
