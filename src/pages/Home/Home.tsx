import Picture from './components/Picture/Picture';

import style from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={style['home']}>
      <Picture />
    </div>
  );
};

export default Home;
