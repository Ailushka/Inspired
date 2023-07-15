import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import { addToFavorite, removeFromFavorite } from '../../features/favoritesSlice.js';

import style from './BtnLike.module.scss';
import cn from 'classnames';

export const BtnLike = ({id}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  }

  return (
    <button
      className={isFavorite ? cn(style.like, style.active) : style.like}
      aria-label='Добавить в избранное'
      type='button'
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  )
}
