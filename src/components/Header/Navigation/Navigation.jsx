import { Container } from '../../Layout/Container/Container.jsx';
import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';
import style from './Navigation.module.scss';

export const Navigation = ({list}) => (
  <nav className={style.navigation}>
    <Container>
      <Gender list={list} />
      <Category list={list} />
    </Container>
  </nav>
)
