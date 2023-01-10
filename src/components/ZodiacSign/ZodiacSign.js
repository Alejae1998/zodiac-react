import './ZodiacSign.css';

export default function ZodiacSign(booger) {
  return (
    <div className="zodiac-sign">
      <div className="zodiacs-container">
        <img src={`${process.env.PUBLIC_URL}/images/${booger.name}.png`} />
      </div>
      <div className="text">
        <h3 className="name">{booger.name}</h3>
        <span className="dates">{booger.dates}</span>
      </div>
    </div>
  );
}
