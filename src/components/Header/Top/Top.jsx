import { NavLink } from 'react-router-dom';
import { Container } from '../../Layout/Container/Container.jsx';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';

import style from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';

export const Top = () => (
  <div className={style.top}>
    <Container className={style.topContainer}>
      <a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
      <NavLink className={style.topLogo} to="/">
        <img src={logo} alt="Логотип Inspired" />
      </NavLink>
      <div className={style.topNavigation}>
        <ul className={style.topNavList}>
          <li className={style.topNavItem}>
            <button className={style.topLink}>
              <SearchSVG />
            </button>
          </li>
          <li className={style.topNavItem}>
            <NavLink className={style.topLink} to={'/cart'}>
              <CartSVG />
            </NavLink>
          </li>
          <li className={style.topNavItem}>
            <NavLink className={cn(style.topLink, style.like)} to='/favorite'>
              <LikeSVG />
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </div>
)
