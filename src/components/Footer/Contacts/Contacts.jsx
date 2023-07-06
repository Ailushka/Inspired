import style from './Contacts.module.scss';

export const Contacts = ({ className }) => (
  <div className={style.contacts}>
    <a className={className} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
    <a className={className} href="tel:89304902620">8 930 490 26 20</a>
  </div>
)
