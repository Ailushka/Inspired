import { useRef, useState } from 'react';
import style from './Color.module.scss';
import cn from 'classnames';

export const Color = ({ color, checked }) => {
  const inputColorRef = useRef();
  const [isChecked, setIsChecked] = useState(checked);

  function handleClick() {
    setIsChecked(inputColorRef.current.checked);
  }

  return (
    <label
      className={isChecked ? cn(style.color, style.colorCheck) : cn(style.color)}
      style={{'--data-color': color}}
    >
      <input
        type="radio"
        name="color"
        value={color}
        id="#"
        ref={inputColorRef}
        onClick={handleClick}
      />
    </label>
  )
}
