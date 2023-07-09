import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container.jsx';
import { Product } from '../Product/Product.jsx';
import style from './Goods.module.scss';

export const Goods = ({categoryData}) => {
  const { goodsList } = useSelector(state => state.goods);

  const title = categoryData?.title ?? 'Новинки';

  return (
    <section>
      <Container>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
