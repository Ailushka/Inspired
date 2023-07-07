import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../../Layout/Container/Container.jsx';
import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';
import { setActiveGender } from '../../../features/navigationSlice.js';
import style from './Navigation.module.scss';

export const Navigation = () => {
  const dispatch =useDispatch();
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  return (
    <nav className={style.navigation}>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  )
}
