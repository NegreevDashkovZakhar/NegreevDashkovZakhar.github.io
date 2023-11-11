import Window from '@components/Window';
import style from './EntryWindow.module.scss';

const EntryWindow: React.FC = () => {
  return (
    <Window className={style['entry-window']}>
      <p className={style['entry-window__title']}>Если ты читаешь это...</p>
    </Window>
  );
};

export default EntryWindow;
