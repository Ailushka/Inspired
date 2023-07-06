import { NavLink, useLocation } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';

export const Gender = ({ list }) => {
  const location = useLocation();
  const activeGender = location.pathname.slice(1) || 'women';

  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li key={item.link} className={style.item}>
          <NavLink className={({isActive}) => cn(style.link, (isActive || activeGender === item.link) && style.linkActive)} to={item.link}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}
