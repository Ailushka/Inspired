import { useEffect, useRef } from 'react';
import style from './Color.module.scss';
import cn from 'classnames';

export const Color = ({ color, checked }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color)
  }, [color])

  return (
    <li
      ref={colorRef}
      className={cn(style.color, checked ? style.colorCheck : '')}
      // style={{'--data-color': color}}
    />
  )
}
