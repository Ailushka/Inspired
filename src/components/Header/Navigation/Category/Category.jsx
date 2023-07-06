import { NavLink, useLocation } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const location = useLocation();
  const activeGender = location.pathname.slice(1) || 'women';
  const activeGenderList = list.find(item => item.link === activeGender);

  return (
    <ul className={style.category}>
      {activeGenderList.categories.map(category => (
        <li key={category.link}>
          <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive)} to={`${activeGender}/${category.link}`}>{category.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}
