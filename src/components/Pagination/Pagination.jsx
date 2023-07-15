import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setPage } from '../../features/goodsSlice.js';
import style from './Pagination.module.scss';
import cn from 'classnames';

export const Pagination = () => {
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector(state => state.goods);
  const dispatch = useDispatch();

  const handlePageChange = (newPage => {
    dispatch(setPage(newPage));
  })

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(+page - 1);
    }
  }

  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(+page + 1);
    }
  }

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={style.item}>
          <NavLink
            className={cn(style.link, i === +page && style.linkActive)}
            to={`${pathname}?page=${i}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      )
    }
    return paginationItems;
  }

  return (
    <div className={style.pagination}>
      {pages > 1 &&
        <button
          className={style.arrow}
          onClick={handlePrevPage}
          disabled={page <= 2}
        >
          &lt;
        </button>
      }
      <ul className={style.list}>{renderPaginationItems()}</ul>
      {pages > 1 &&
        <button
          className={style.arrow}
          onClick={handleNextPage}
          disabled={page >= pages - 1 || pages <= 3}
        >
          &gt;
        </button>
      }
    </div>
  )

}
