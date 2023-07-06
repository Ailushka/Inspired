import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list, titleClassName, linkClassName }) => (
  <div className={style.category}>
    <h2 className={cn(titleClassName, style.categoryTitle)}>Каталог</h2>
    <ul className={style.categoryList}>
      {list.map(item => (
        <li key={item.link}>
          <h3 className={style.categorySubtitle}>
            <NavLink to={item.link} className={linkClassName}>{item.title}</NavLink>
          </h3>
          <ul className={style.categorySublist}>
            {item.categories.map(category => (
              <li key={category.link}>
                <NavLink to={`${item.link}/${category.link}`} className={linkClassName}>{category.title}</NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)
