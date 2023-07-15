import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container.jsx';
import { ColorList } from '../ColorList/ColorList.jsx';
import { ProductSize } from './ProductSize/ProductSize.jsx';
import { Count } from '../Count/Count.jsx';
import { Goods } from '../Goods/Goods.jsx';
import { BtnLike } from '../BtnLike/BtnLike.jsx';
import { fetchCategory } from '../../features/goodsSlice.js';
import { fetchProduct } from '../../features/productSlice.js';
import { setActiveGender } from '../../features/navigationSlice.js';
import { API_URL } from '../../const.js';
import style from './ProductPage.module.scss';
import cn from 'classnames';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);

const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  };

  const handleColorChange = evt => {
    setSelectedColor(evt.target.value);
  };

  const handleSizeChange = evt => {
    setSelectedSize(evt.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(setActiveGender(product.gender));
  }, [id, product.gender, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({
      gender: product.gender,
      category: product.category,
      count: 4,
      top: true,
      exclude: product.id
  }));
  }, [product.gender, product.category, product.id, dispatch]);

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img className={style.image} src={product.pic && `${API_URL}${product.pic}`} alt={`${product.title} ${product.description}`} />
          <form className={style.content}>
            <h2 className={style.title}>{product.title}</h2>
            <p className={style.price}>руб {product.price}</p>
            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул</span>
              <span className={style.id}>{product.id}</span>
            </div>
            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
              <ColorList
                colors={product.colors}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
              />
            </div>
            <ProductSize
              className={style.subtitle}
              size={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
             />
            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>
            <div className={style.control}>
              <Count
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button className={style.addCart} type='submit'>В корзину</button>
              <BtnLike id={id} />
            </div>

          </form>
        </Container>
      </section>
      <Goods title='Вам также может понравиться' />
    </>
  )
}
