import style from './Text.module.scss';
import classNames from 'classnames';

interface TextProps {
  children: React.ReactElement | string;
  className?: string;
}

const Text: React.FC<TextProps> = ({children, className}) => {
  return <p className={classNames(style.text, className)}>{children}</p>;
};

export default Text;
