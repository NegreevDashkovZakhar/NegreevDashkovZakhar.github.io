import Picture from './components/Picture/Picture';

import style from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={style['home']}>
      <p className={style['home__title']}>Это мы гуляем?</p>
      <Picture />
    </div>
  );
};

export default Home;
