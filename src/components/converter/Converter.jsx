import { useState } from 'react';

export default function Converter() {
  const [color, setColor] = useState('');

  const handleChange = ({ target }) => {
    if (target.value.length < 7) {
      return;
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
    if (result === null) {
      setColor('Ошибка!');
      return;
    }

    const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    setColor(`rgb(${rgb})`);
  }

  return (
    <div className="Converter" style={{ backgroundColor: color }}>
      <div className="Converter__container">
        <input className="Converter__input" onChange={handleChange} />
        <div className="Converter__result">{color}</div>
      </div>
    </div>
  );
}