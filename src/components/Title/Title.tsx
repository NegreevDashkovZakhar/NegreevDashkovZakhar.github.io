import classNames from 'classnames';
import style from './Title.module.scss';

interface TitleProps {
  level?: number;
  children: React.ReactElement | string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({level = 3, children, className = ''}) => {
  const renderMap: {[key: number]: React.ReactElement} = {
    3: <h3 className={classNames(style.title, className)}>{children}</h3>,
  };

  return renderMap[level];
};

export default Title;
