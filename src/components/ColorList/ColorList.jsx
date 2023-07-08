import { useSelector } from 'react-redux';
import { Color } from './Color/Color.jsx';
import style from './ColorList.module.scss';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  return (
    <ul className={style.colorList}>
      {colors.map((id, item) => {
        const color = colorList.find(color => color.id === id);
        return <li key={id}><Color color={color?.code} checked={!item} /></li>
      })}
    </ul>
  )
}
