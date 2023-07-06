import { Category } from './Category/Category.jsx';
import { Social } from './Social/Social.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Development.jsx';
import { Container } from '../Layout/Container/Container.jsx';
import style from './Footer.module.scss';
import cn from 'classnames';

export const Footer = ({list}) => (
  <footer>
    <Container>
      <div className={style.container}>
        <Category titleClassName={style.title} linkClassName={style.link} list={list} />
        <Social titleClassName={style.title} linkClassName={style.link} />
        <Contacts className={style.link} />
        <Copyright />
        <Development className={style.link} />
      </div>
    </Container>
  </footer>
)
