import style from './Window.module.scss';
import classNames from 'classnames';

interface WindowProps {
  children: React.ReactElement;
  className?: string;
}

const Window: React.FC<WindowProps> = ({children, className = ''}) => {
  return (
    <div className={classNames(style.window, className)}>
      <div className={style['window__content']}>{children}</div>
    </div>
  );
};

export default Window;
