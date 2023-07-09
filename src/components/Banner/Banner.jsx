import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { Container } from '../Layout/Container/Container.jsx';
import { API_URL } from '../../const.js';
import style from './Banner.module.scss';

export const Banner = ({data}) => {
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {

    if (isMobile) {
      setBackgroundImage(data?.bg.mobile);
    } else if (isTablet) {
      setBackgroundImage(data?.bg.tablet);
    } else if (isLaptop) {
      setBackgroundImage(data?.bg.laptop);
    } else {
      setBackgroundImage(data?.bg.desktop);
    }
  }, [isMobile, isTablet, isLaptop, data]);

  return (
    data &&
    <section
      className={style.banner}
      style={{ backgroundImage: `url(${API_URL}${backgroundImage})` }}
    >
      <Container>
        <div className={style.content}>
          <h2 className={style.title}>{data.description}</h2>
          <NavLink className={style.link} to={`/product/${data.id}`}>Перейти</NavLink>
        </div>
      </Container>
    </section>
  )
}
