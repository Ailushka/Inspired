import { useSelector } from 'react-redux';
import { Color } from './Color/Color.jsx';
import { ColorLabel } from './ColorLabel/ColorLabel.jsx';
import style from './ColorList.module.scss';

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorList } = useSelector(state => state.color);

  return handleColorChange ? (
    <div className={style.colorList}>
      {colors?.map((id, item) => {
        const color = colorList.find(color => color.id === id);
        return <ColorLabel
          key={id}
          color={color}
          checked={!item}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />
      })}
    </div>
    ) : (
    <ul className={style.colorList}>
      {colors.map((id, item) => {
        const color = colorList.find(color => color.id === id);
        return <Color key={id} color={color?.code} checked={!item} />
      })}
    </ul>
  )
}
