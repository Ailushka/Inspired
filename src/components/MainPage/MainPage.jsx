import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Goods } from '../Goods/Goods.jsx';
import { fetchGender, fetchCategory } from '../../features/goodsSlice.js';
import { setActiveGender } from '../../features/navigationSlice.js';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams.js';
import { Banner } from '../Banner/Banner.jsx';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();

  const { activeGender, categories, genderList } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  const categoryData = genderData?.list
    .find(item => item.slug === category);

  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      const param = { gender, category };
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, page, dispatch]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title} />
    </>
  );
};
