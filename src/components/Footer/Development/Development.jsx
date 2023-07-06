import style from './Development.module.scss';

export const Development = ({ className }) => (
  <div className={style.development}>
    <ul className={style.developmentList}>
      <li>Designer: <a className={className} href='https://t.me/Mrshmallowww'>Anastasia Ilina</a></li>
      <li>Developer: <a className={className} href='https://t.me/Ailushka'>Yulia Okhotina</a></li>
    </ul>
  </div>
)
