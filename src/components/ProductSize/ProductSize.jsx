import style from './ProductSize.module.scss';
import cn from 'classnames';

export const ProductSize = ({
  className,
  size,
  selectedSize,
  handleSizeChange,
}) => {
  return (
    <div className={style.size}>
      <p className={cn(className, style.title)}>Размер</p>
      <ul className={style.list}>
        {size?.map(item => (
          <li key={item}>
            <label className={style.item}>
              <input
                className={style.input}
                type='radio'
                name='size'
                value={item}
                checked={(selectedSize === item)}
                onChange={handleSizeChange}
              />
              <span className={style.check}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
