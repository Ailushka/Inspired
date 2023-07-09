import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ titleClassName, linkClassName }) => {
  const { genderList, categories } = useSelector(state => state.navigation);

  return (
    <div className={style.category}>
      <h2 className={cn(titleClassName, style.categoryTitle)}>Каталог</h2>
      <ul className={style.categoryList}>
        {genderList.map(gender => (
          <li key={gender}>
            <h3 className={style.categorySubtitle}>
              <NavLink to={`/catalog/${gender}`} className={linkClassName}>{categories[gender].title}</NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {categories[gender]?.list?.map(item => (
                <li key={item.slug}>
                  <NavLink to={`/catalog/${gender}/${item.slug}`} className={linkClassName}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
