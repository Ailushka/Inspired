import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Gender.module.scss';
import cn from 'classnames';

export const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(gender => (
        <li key={gender} className={style.item}>
          <NavLink className={({isActive}) => cn(style.link, (isActive || gender === activeGender) && style.linkActive)} to={`/catalog/${gender}`}>{categories[gender].title}</NavLink>
        </li>
      ))}
    </ul>
  )
}
